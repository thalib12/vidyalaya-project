import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

export type UserDocument = Document<User>;

export type UserModel = Model<User>;

@Schema()
export class User extends Document {
  @Prop({ required: true })
  mobile: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass<User>(User);

export const UserModelDefinition: ModelDefinition = {
  name: User.name,
  schema: UserSchema,
  collection: 'user',
};
