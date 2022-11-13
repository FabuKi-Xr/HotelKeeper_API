import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OrderModule } from './order/order.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [PrismaModule, OrderModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
