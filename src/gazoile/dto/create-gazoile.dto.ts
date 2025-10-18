import { IsNumber, Min } from 'class-validator';

export class CreateGazoileDto {
  @IsNumber()
  @Min(0)
  quantity: number;

  @IsNumber()
  @Min(0)
  pricePerUnit: number;
}
