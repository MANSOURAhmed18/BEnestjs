import { IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateGazoileDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  quantity?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  pricePerUnit?: number;
}
