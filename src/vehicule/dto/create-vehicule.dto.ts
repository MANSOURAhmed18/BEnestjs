import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateVehiculeDto {
  @IsString()
  readonly immatriculation: string;

  @IsOptional()
  @IsString()
  readonly marque?: string;

  @IsOptional()
  @IsString()
  readonly modele?: string;

  @IsOptional()
  @IsString()
  readonly type?: string;

  @IsOptional()
  @IsNumber()
  readonly kilometrage?: number;
}