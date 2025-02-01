/* eslint-disable prettier/prettier */

import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// Define GlobalMetadata as a class
class GlobalMetadata {
  @IsString()
  websiteTitle: string;

  @IsString()
  favIcon: string;
}

// Define SocialMetadata as a class
class SocialMetadata {
  @IsOptional()
  @IsString()
  facebook?: string;

  @IsOptional()
  @IsString()
  twitter?: string;

  @IsOptional()
  @IsString()
  snapchat?: string;
}

// Define HeaderMetadata as a class
class HeaderMetadata {
  @IsOptional()
  @IsString()
  logo?: string;

  @IsOptional()
  @IsString()
  brandText?: string;
}

// Define FooterMetadata as a class
class FooterMetadata {
  @IsOptional()
  @IsString()
  subtitle?: string;

  @IsOptional()
  @IsString()
  copyrightText?: string;
}

// Define the main TenantMetadata class
export class TenantMetadata {
  @ValidateNested()
  @Type(() => GlobalMetadata)
  global: GlobalMetadata;

  @ValidateNested()
  @Type(() => SocialMetadata)
  social: SocialMetadata;

  @ValidateNested()
  @Type(() => HeaderMetadata)
  header: HeaderMetadata;

  @ValidateNested()
  @Type(() => FooterMetadata)
  footer: FooterMetadata;
}
