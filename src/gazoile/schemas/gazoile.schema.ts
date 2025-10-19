import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Vehicule } from '../../vehicule/schemas/vehicule.schema';

export type GazoileDocument = Gazoile & Document;

@Schema({ timestamps: true })
export class Gazoile {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: Number })
  price: number;

  @Prop({ required: true, type: Number })
  quantity: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicule', required: true })
  vehicule: Vehicule;
}

export const GazoileSchema = SchemaFactory.createForClass(Gazoile);