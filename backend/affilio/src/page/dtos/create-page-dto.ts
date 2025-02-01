/* eslint-disable prettier/prettier */

import { IsString, IsArray, IsOptional, IsBoolean, IsUUID } from 'class-validator';

export class CreatePageDto {
  @IsString()
  slug: string;

  @IsBoolean()
  published: boolean;

  @IsString()
  createdBy: string; // Assuming 'createdBy' is a User ID (UUID)

  @IsOptional()
  @IsString()
  seoTitle?: string;

  @IsOptional()
  @IsString()
  seoDescription?: string;

  @IsArray()
  @IsString({ each: true })
  seoKeywords: string[];

  @IsOptional()
  metadata?: any; // Can be null or any JSON type

  @IsUUID()
  tenantId: string; // Tenant ID (UUID)
}