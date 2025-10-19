import { IsNotEmpty, IsNumber, IsString, Min, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreateGazoileDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  quantity: number;

  @IsNotEmpty()
  @IsMongoId()
  vehicule: Types.ObjectId;
}