import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OrderModule } from './order/order.module';
import { ReviewModule } from './review/review.module';
import { PaymentModule } from './payment/payment.module';
import { ConfigModule } from '@nestjs/config';
import { QuestionAnswerModule } from './question-answer/question-answer.module';

@Module({
  imports: [PrismaModule, 
    OrderModule, 
    ReviewModule, 
    PaymentModule, QuestionAnswerModule,
    // ConfigModule.forRoot({
    //   envFilePath:
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
