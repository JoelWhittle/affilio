/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TenantService } from './tenant.service';
import { TenantController } from './tenant.controller';
import { UserService } from '../user/user/user.service';

@Module({
  imports: [PrismaModule], // Import PrismaModule
  providers: [TenantService, UserService],
  controllers: [TenantController],
})
export class TenantModule {}
