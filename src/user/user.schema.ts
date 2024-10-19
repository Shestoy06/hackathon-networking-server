import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  static readonly TELEGRAM_ID = 'telegramId';
  static readonly USERNAME = 'username';

  @Prop({ required: true })
  telegramId: number;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  avatar: string;

  @Prop({ required: false, default: false })
  description: string;

  @Prop({ required: false, default: null })
  walletAddress: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: User.name }], default: [] })
  contacts: Types.ObjectId[];
}

export enum UserReferenceFields {
  FRIENDS = 'friends',
  TASK = 'taskRefs.taskRef',
}

export const UserSchema = SchemaFactory.createForClass(User);
