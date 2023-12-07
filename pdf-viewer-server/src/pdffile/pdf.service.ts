import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PdfFile, PdfModel } from './models/pdf.model';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserModel } from './models/user.model';

@Injectable()
export class PdfService {
  constructor(
    @InjectModel(PdfFile.name)
    private readonly pdfFile: PdfModel,
    @InjectModel(User.name)
    private readonly user: UserModel,
  ) {}

  async uploadFile(file: CreatePdfDto) {
    return await this.pdfFile.create(file);
  }

  getAllPdfs(userId: string) {
    return this.pdfFile.find({ userId }, '-pdfBinary -__v');
  }

  getPdf(id: string) {
    return this.pdfFile.findById(id);
  }

  async createUser(user: CreateUserDto) {
    const userExist = await this.user.find({ mobile: user.mobile });
    if (userExist.length) {
      if (userExist[0].password === user.password) {
        return userExist[0];
      } else {
        return new UnauthorizedException();
      }
    } else {
      return this.user.create(user);
    }
  }
}
