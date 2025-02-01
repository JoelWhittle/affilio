/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.module';
import { CreateUserDto } from './dto/create-user-dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const { email, password, tenantId, ownedTenants, authors, affiliateProducts, pages } = createUserDto;
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Prepare the user data object
    const userData: any = {
      email,
      password: hashedPassword,
      ownedTenants: {
        connect: ownedTenants.map(id => ({ id })),
      },
      authors: {
        connect: authors.map(id => ({ id })),
      },
      affiliateProductsCreated: {
        connect: affiliateProducts.map(id => ({ id })),
      },
      pagesCreated: {
        connect: pages.map(id => ({ id })),
      },
    };
  
    // Conditionally connect to a tenant if tenantId is provided
    if (tenantId) {
      userData.tenant = {
        connect: {
          id: tenantId,  // Only connect if tenantId is present
        },
      };
    }
  
    // Create the user
    const user = await this.prisma.user.create({
      data: userData,
    });
  
    return user;
  }
  
  // Fetch all users
  async getAllUsers() {
    return this.prisma.user.findMany({
      include: {
        tenant: true, // Include related tenant information if needed
        ownedTenants: true, // Include owned tenants if needed
        authors: true, // Include associated authors if needed
        affiliateProductsCreated: true, // Include associated affiliate products if needed
        pagesCreated: true, // Include associated pages if needed
      },
    });
  }

  // Fetch user by ID
  async getUserById(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId, // Match the user by their ID
      },
      include: {
        tenant: true, // Include related tenant information if needed
        ownedTenants: true, // Include owned tenants if needed
        authors: true, // Include associated authors if needed
        affiliateProductsCreated: true, // Include associated affiliate products if needed
        pagesCreated: true, // Include associated pages if needed
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return user;
  }
}
