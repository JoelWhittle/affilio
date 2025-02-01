/* eslint-disable prettier/prettier */

import {   Controller, Get, Options, Param} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dtos/create-tenant-dto';


@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}


  @Get()
  async test() {
    return "heere";
  }
  
  @Get('by-api-key/:apiKey')
  async getUserById(@Param('apiKey') apiKey: string) {
console.log("waaa");
console.log(apiKey);
    return this.tenantService.getTenantByApiKey(apiKey);
  }


  @Options('by-api-key/:apiKey')
  handleOptions() {
    return null;  // Handle the OPTIONS request explicitly
  }


  @Get('create-dummy')
  async createDummyTenant() {
    // Generate a dummy CreateTenantDto
    const dummyCreateTenantDto: CreateTenantDto = {
      name: 'The Bunny Hutch',
      description: 'This is a dummy tenant for testing. Dedicated to May',
      domain: 'thebunnyhutch2.com',
      createdBy: 'f1cabdcb-68b3-4c39-97aa-db612709c9ef', // Replace with an actual user ID from your database or mock data
      metadata: {
        global: {
          websiteTitle: 'The Bunny Hutch',
          favIcon: 'favicon.ico',
        },
        social: {
          facebook: 'https://facebook.com/dummytenant',
          twitter: 'https://twitter.com/dummytenant',
        },
        header: {
          logo: 'logo.png',
          brandText: 'The Bunny Hutch',
        },
        footer: {
          subtitle: 'Your hub for rabbit care tips, news, and guides.',
          copyrightText: '© <<YEAR>> <<NAME>>. All Rights Reserved',
        },
      },
    };

    // Call createTenant method in TenantService
    try {
      const tenant = await this.tenantService.createTenant(dummyCreateTenantDto);
      return tenant;
    } catch (error) {
      throw error;
    }
  }
}
