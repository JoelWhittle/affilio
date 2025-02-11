/* eslint-disable prettier/prettier */

import { Body, Controller,Post } from '@nestjs/common';
import { CreateNewsletterSubscriptionDto } from './dto/create-newsletter-subscription-dto';
import { NewsletterSubscriptionService } from './newsletter-subscription.service';
import { CancelNewsletterSubscriptionDto } from './dto/cancel-newsletter-subscription-dto';


@Controller('newsletter-subscription')
export class NewsletterSubscriptionController {
  constructor(private readonly newsletterSubscriptionService: NewsletterSubscriptionService) {}

  @Post()
  async createNewsletterSubscription(@Body() createNewsletterSubscriptionDto: CreateNewsletterSubscriptionDto) {
    return this.newsletterSubscriptionService.createNewsletterSubscription(createNewsletterSubscriptionDto);
  }
  
  @Post('cancel')
  async cancelNewsletterSubscription(@Body()  cancelNewsletterSubscriptionDto: CancelNewsletterSubscriptionDto) {
    return this.newsletterSubscriptionService.cancelNewsletterSubscription(cancelNewsletterSubscriptionDto);
  }


  // @Get('dummy')
  // async getDummyData() {
  //   // Dummy CreateUserDto
  //   const dummyUserDto: CreateUserDto = {
  //     email: 'dummy@example.com',
  //     password: 'password123',
  //     ownedTenants: [ ], 
  //     authors: [ ], 
  //     affiliateProducts: [],
  //     pages: [ ], 
  //   };
  //   const user = await this.userService.createUser(dummyUserDto);

  //   return user; // Return the created user
  //   // Simulate saving or adding the dummy data (just returning for now)
  // }

}