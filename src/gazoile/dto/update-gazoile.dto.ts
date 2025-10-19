import { PartialType } from '@nestjs/mapped-types';
import { CreateGazoileDto } from './create-gazoile.dto';

export class UpdateGazoileDto extends PartialType(CreateGazoileDto) {}