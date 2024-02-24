import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  photo: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
