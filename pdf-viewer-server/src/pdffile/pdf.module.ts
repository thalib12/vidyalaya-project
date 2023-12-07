import { Module } from '@nestjs/common';
import { PdffileController } from './pdf.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PdfFileModelDefinition } from './models/pdf.model';
import { PdfService } from './pdf.service';
import { UserModelDefinition } from './models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([PdfFileModelDefinition]),
    MongooseModule.forFeature([UserModelDefinition]),
  ],

  controllers: [PdffileController],
  providers: [PdfService],
})
export class PdffileModule {}
