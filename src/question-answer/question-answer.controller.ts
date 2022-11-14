import { Body, Controller, Get, Param,Post,Query,Request } from '@nestjs/common';
import { AnswerDto } from './dto/answerDto.dto';
import { searchAnswerDto } from './dto/searchAnswerDto.dto';
import { QuestionAnswerService } from './question-answer.service';

@Controller('QA')
export class QuestionAnswerController {
    constructor(private questionAnswerService:QuestionAnswerService){

    }
    @Get(':oid')
    getQAByID(@Param('oid') oid : string){
        return this.questionAnswerService.getQAById(oid)
    }

    @Post('/create')
    createQA(@Body() dto:AnswerDto){
        return this.questionAnswerService.createQA(dto)
    }
}
