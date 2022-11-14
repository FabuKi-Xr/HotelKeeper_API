import { Module } from '@nestjs/common';
import { QuestionAnswerService } from './question-answer.service';
import { QuestionAnswerController } from './question-answer.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [QuestionAnswerService,PrismaService],
  controllers: [QuestionAnswerController]
})
export class QuestionAnswerModule {}
