/* eslint-disable prettier/prettier */

import {  IsUUID } from 'class-validator';


export class GetPageDto {
  slug: any;
  @IsUUID()
  apiKey: string; // Tenant ID (UUID)
}