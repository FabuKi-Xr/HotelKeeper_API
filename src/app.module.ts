import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartuserModule } from './cartuser/cartuser.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { CartserviceModule } from './cartservice/cartservice.module';

@Module({
    imports: [CartuserModule, PrismaModule, CartserviceModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
