/* eslint-disable prettier/prettier */

import { Type } from 'class-transformer';
import { IsObject, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { TenantMetadata } from '../../entities/tenant-metadata'; // Assuming you have the interfaces in a separate file

export class CreateTenantDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  domain: string;

  @IsUUID()
  createdBy: string; // The ID of the user creating this tenant


  @IsObject()
  @ValidateNested()
  @Type(() => TenantMetadata) // Ensure that nested metadata is transformed into the correct type
  @IsOptional() // If metadata is optional
  metadata?: TenantMetadata;
}