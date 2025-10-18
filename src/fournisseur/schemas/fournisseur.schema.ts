import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Fournisseur extends Document {
  @Prop({ required: true })
  companyName: string;

  @Prop()
  contactName: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop()
  address: string;
}

export const FournisseurSchema = SchemaFactory.createForClass(Fournisseur);
