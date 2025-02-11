/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { NewsletterSubscriptionService } from './newsletter-subscription/newsletter-subscription.service';
import { NewsletterSubscriptionController } from './newsletter-subscription/newsletter-subscription.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Import PrismaModule
  providers: [NewsletterSubscriptionService],
  controllers: [NewsletterSubscriptionController],
})
export class UserModule {}
