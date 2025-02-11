/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TenantModule } from './tenant/tenant.module';
import { PrismaModule } from './prisma/prisma.module';
import { PageModule } from './page/page.module';
import { NewsletterSubscriptionModule } from './newsletter-subscription/newsletter-subscription.module';

@Module({
  imports: [UserModule, TenantModule, PageModule, NewsletterSubscriptionModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
