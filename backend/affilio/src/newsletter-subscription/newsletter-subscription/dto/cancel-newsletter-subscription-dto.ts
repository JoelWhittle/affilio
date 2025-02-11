/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {   IsUUID } from 'class-validator';

export class CancelNewsletterSubscriptionDto {

  @IsUUID()
  id: string;
  
}
