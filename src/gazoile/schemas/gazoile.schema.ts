import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Gazoile extends Document {
  @Prop({ required: true, default: 0 })
  quantity: number;

  @Prop({ required: true, default: 0 })
  pricePerUnit: number;

  @Prop({ default: 0 })
  totalPrice: number;
}

export const GazoileSchema = SchemaFactory.createForClass(Gazoile);

// Pre-save hook to automatically calculate totalPrice
GazoileSchema.pre('save', function (next) {
  this.totalPrice = this.quantity * this.pricePerUnit;
  next();
});
