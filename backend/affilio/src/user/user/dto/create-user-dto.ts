/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsOptional, IsUUID, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsUUID()
  tenantId?: string; // Optional for users who are tenant subscribers

  @IsOptional()
  @IsUUID('4', { each: true })
  ownedTenants?: string[]; // Array of tenant IDs if the user is a tenant creator

  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  authors?: string[]; // Array of author IDs if the user is associated with authors

  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  affiliateProducts?: string[]; // Array of affiliate product IDs if the user is associated with affiliate products

  @IsOptional()
  @IsUUID('4', { each: true })
  pages?: string[]; // Array of page IDs if the user is associated with pages
}
