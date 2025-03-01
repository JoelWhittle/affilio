/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Ensure PrismaService is exported
})
export class PrismaModule {}

export { PrismaService };