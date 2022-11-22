import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnswerDto } from './dto/answerDto.dto';
import { searchAnswerDto } from './dto/searchAnswerDto.dto';

@Injectable()
export class QuestionAnswerService {
    constructor(private prisma : PrismaService){

    }
    async getQAById(oid : string){
        const answer = await this.prisma.questionAnswer.findMany({
            where:{
                OId:oid,
            }
        })
        return answer
    }
    async createQA(dto:AnswerDto){
        const qa = await this.prisma.questionAnswer.findFirst({
            where:{
                QId:dto.QId,
                OId:dto.OId,
            }
        })
        if (qa){
            return{
                statuscode: 400,
                msg:"ตรวจพบคำตอบของออเดอร์นี้แล้วดังกล่าว"
            }
        }
        const answer:Prisma.QuestionAnswerCreateWithoutOrderInput = await this.prisma.questionAnswer.create({
            data:{
                QId:dto.QId,
                OId:dto.OId,
                answer:dto.ans
            }
        })
        return {
            msg:"QA was created.",
            statuscode: 200
        }
    }
    async updateQA(dto:AnswerDto){
        const answer:Prisma.QuestionAnswerWhereUniqueInput = await this.prisma.questionAnswer.update({
            where:{
                key:{
                    QId:dto.QId,
                    OId:dto.OId,
                },
            },
            data:{
                answer:dto.ans
            }
        })
        return {
            msg:"Order's QA was update.",
            statuscode:200
        }
    }
    
}
