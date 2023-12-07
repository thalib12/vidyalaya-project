import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { PdfService } from './pdf.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('pdf')
export class PdffileController {
  constructor(private readonly pdfService: PdfService) {}

  //store pdf binary in DB
  @Post()
  create(@Body() createPdffileDto: CreatePdfDto) {
    return this.pdfService.uploadFile(createPdffileDto);
  }

  @Post('login')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.pdfService.createUser(createUserDto);
  }

  //get all Pdfs with name and id
  @Get('get-all-pdf')
  getAllPdf(@Query('userId') userId: string) {
    return this.pdfService.getAllPdfs(userId);
  }

  //get one Pdf's binary
  @Get('get-pdf')
  getPdf(@Query('id') id: string) {
    return this.pdfService.getPdf(id);
  }
}
