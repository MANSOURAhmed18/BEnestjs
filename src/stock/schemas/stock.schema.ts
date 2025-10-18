import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Fournisseur } from '../../fournisseur/schemas/fournisseur.schema';

@Schema({ timestamps: true })
export class Stock extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true, default: 0 })
  quantity: number;

  @Prop({ required: true, default: 0 })
  price: number;

  @Prop({ type: Types.ObjectId, ref: 'Fournisseur' })
  fournisseur: Fournisseur;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
