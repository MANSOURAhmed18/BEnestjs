import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Chantier } from '../../chantier/schemas/chantier.schema';
import { Gazoile } from 'src/gazoile/schemas/gazoile.schema';


@Schema({ timestamps: true })
export class Vehicule extends Document {
  @Prop({ required: true })
  immatriculation: string;

  @Prop()
  marque: string;

  @Prop()
  modele: string;

  @Prop()
  type: string;

  @Prop()
  kilometrage: number;

  @Prop({ type: Types.ObjectId, ref: 'Chantier' })
  chantier: Chantier;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Gazoile' }] })
  gazoiles: Gazoile[];
}

export const VehiculeSchema = SchemaFactory.createForClass(Vehicule);
