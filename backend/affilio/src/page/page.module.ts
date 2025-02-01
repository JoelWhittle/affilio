/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PageService } from './page.service';
import { PageController } from './page.controller';
import { UserService } from '../user/user/user.service';
import { TenantService } from '../tenant/tenant.service';

@Module({
  imports: [PrismaModule], // Import PrismaModule
  providers: [PageService, TenantService, UserService],
  controllers: [PageController],
})
export class PageModule {}
