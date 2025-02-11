/* eslint-disable prettier/prettier */

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.module';
import { CreateNewsletterSubscriptionDto } from './dto/create-newsletter-subscription-dto';
import { CancelNewsletterSubscriptionDto } from './dto/cancel-newsletter-subscription-dto';

@Injectable()
export class NewsletterSubscriptionService {
  constructor(private readonly prisma: PrismaService) {}

  async createNewsletterSubscription(createNewsletterSubscriptionDto: CreateNewsletterSubscriptionDto) {
    const { email, tenantId } = createNewsletterSubscriptionDto;
    
    try {


      const tenant = await this.prisma.tenant.findFirst({
        where: {
          id: tenantId,
        }
      });

      if (!tenant) {
       throw new InternalServerErrorException('Tenant not found');
      }
      const testSubscription = await this.prisma.newsletterSubscription.findFirst({
        where: {
          email: email,
          tenantId: tenant.id,
          cancelled: false
        }
      });

      if (testSubscription) {
        return {
          message: 'Subscription already exists',
          subscription: testSubscription
        };
      }

      // Prepare the user data object
      const subscriptionData: any = {
        email: email,
        tenantId: tenant.id,
        cancelled: false
      };
    
      // Create the user
      const subscription = await this.prisma.newsletterSubscription.create({
        data: subscriptionData,
      });
    
      return subscription;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async cancelNewsletterSubscription(cancelNewsletterSubscriptionDto: CancelNewsletterSubscriptionDto) {
    const { id } = cancelNewsletterSubscriptionDto;
    
    const testSubscription = await this.prisma.newsletterSubscription.findFirst({
      where: {
        id: id,
      }
    });

    if (testSubscription) {
      testSubscription.cancelled = true;
      await this.prisma.newsletterSubscription.update({
        where: { id: id },
        data: { cancelled: true, cancelledAt: new Date() },
      });
      return testSubscription;
    }

    return null; // or handle the case where the subscription is not found
  }

}
