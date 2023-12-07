import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

export type PdfFileDocument = Document<PdfFile>;

export type PdfModel = Model<PdfFile>;

@Schema()
export class PdfFile extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  pdfBinary: string;

  @Prop({ required: true })
  userId: string;
}

export const PdfFileSchema = SchemaFactory.createForClass<PdfFile>(PdfFile);

export const PdfFileModelDefinition: ModelDefinition = {
  name: PdfFile.name,
  schema: PdfFileSchema,
  collection: 'pdfFile',
};
