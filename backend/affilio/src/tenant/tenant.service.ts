/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.module';
import { UserService } from '../user/user/user.service'; // Import UserService
import { CreateTenantDto } from './dtos/create-tenant-dto';
import { randomUUID } from 'crypto';

@Injectable()
export class TenantService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService // Inject UserService
  ) {}

  async createTenant(createTenantDto: CreateTenantDto) {
    const { name, description, domain, createdBy, metadata } = createTenantDto;

    // Confirm the user exists
    const user = await this.userService.getUserById(createdBy);
    if (!user) {
      throw new NotFoundException(`User with ID ${createdBy} not found.`);
    }

    // Generate an API key for the tenant
    const apiKey = randomUUID();

    // Serialize metadata into JSON format if provided
    const serializedMetadata = metadata ? JSON.parse(JSON.stringify(metadata)) : null;

    try {
      // Insert tenant into the database
      return await this.prisma.tenant.create({
        data: {
          name,
          description,
          domain,
          apiKey, // Include the generated API key
          createdByUser: {
            connect: { id: createdBy }, // Connect the relation using the user ID
          },
          metadata: serializedMetadata, // Ensure it's in a proper JSON format
        },
      });
    } catch (error) {
      console.error('Error creating tenant:', error);
      throw new InternalServerErrorException('Failed to create tenant.');
    }
  }

  // Get tenant by ID
  async getTenantById(tenantId: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
    });

    if (!tenant) {
      throw new NotFoundException(`Tenant with ID ${tenantId} not found.`);
    }

    return tenant;
  }

  // Get tenant by API key
  async getTenantByApiKey(apiKey: string) {
    try {
      const tenant = await this.prisma.tenant.findUnique({
        where: { apiKey },
      });

      if (!tenant) {
        throw new NotFoundException('Tenant not found for the provided API key.');
      }

      return tenant;
    } catch (error) {
      console.error('Error fetching tenant:', error.message);
      throw new InternalServerErrorException('Error retrieving tenant by API key.');
    }
  }
}
