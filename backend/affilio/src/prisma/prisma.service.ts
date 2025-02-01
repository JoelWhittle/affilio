/* eslint-disable prettier/prettier */

import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect(); // Connect to the database when the app starts
  }

  async onModuleDestroy() {
    await this.$disconnect(); // Disconnect when the app shuts down
  }
}
