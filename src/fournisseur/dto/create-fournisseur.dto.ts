import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateFournisseurDto {
  @IsString()
  companyName: string;

  @IsOptional()
  @IsString()
  contactName?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  address?: string;
}
