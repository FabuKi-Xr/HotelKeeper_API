import { Module } from '@nestjs/common';
import { CartuserService } from './cartuser.service';
import { CartuserController } from './cartuser.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers: [CartuserService, PrismaService],
    controllers: [CartuserController],
})
export class CartuserModule {}
