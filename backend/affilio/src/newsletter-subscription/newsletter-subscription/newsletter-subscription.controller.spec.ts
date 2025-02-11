/* eslint-disable prettier/prettier */


import { Test, TestingModule } from '@nestjs/testing';
import { NewsletterSubscriptionController } from './newsletter-subscription.controller';

describe('NewsletterSubscriptionController', () => {
  let controller: NewsletterSubscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsletterSubscriptionController],
    }).compile();

    controller = module.get<NewsletterSubscriptionController>(NewsletterSubscriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
