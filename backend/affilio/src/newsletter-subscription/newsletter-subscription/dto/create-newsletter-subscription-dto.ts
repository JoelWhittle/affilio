/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {  IsEmail, IsUUID } from 'class-validator';

export class CreateNewsletterSubscriptionDto {
  @IsEmail()
  email: string;
  @IsUUID()
  tenantId: string;
  
}
