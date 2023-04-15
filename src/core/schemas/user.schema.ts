import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  id: Types.ObjectId;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
