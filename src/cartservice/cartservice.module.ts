import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CartserviceController } from './cartservice.controller';
import { CartserviceService } from './cartservice.service';

@Module({
    providers: [CartserviceService, PrismaService],
    controllers: [CartserviceController],
})
export class CartserviceModule {}
