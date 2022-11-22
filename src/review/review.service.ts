import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReviewDto } from './dto';
import { UpdateReviewDto } from './dto/updateReviewDto.dto';

@Injectable()
export class ReviewService {
    constructor (private prisma : PrismaService){}
    async createReview(dto:ReviewDto){
        const review:Prisma.ReviewCreateInput = await this.prisma.review.create({
            data:{
                HId : dto.HId,
                Hname :dto.Hname,
                star : dto.star,
                desc : dto.desc,
                service : dto.service
            }
        })
        return {msg:"You have created a Review.",
            statuscode : 200
        }
    }

    async update(id:string,dto:UpdateReviewDto){
        const review = await this.prisma.review.findFirst({
            where:{
                RId : id
            }
        })
        if (!review){
            return {msg:"This review didnt exist.",
                statuscode : 403
            }
        }
        const update = await this.prisma.review.update({
            where:{
                RId : id
            },
            data:{
                star : dto.star,
                desc : dto.desc,
                service: dto.service,
            }
        })
        return {
            msg : "this review was updated",
            statuscode: 200
        }
    }

    async findAll(){
        return await this.prisma.review.findMany()
    }

    async findById(id:string){
        const review = await this.prisma.review.findMany({
            where:{
                HId:id
            }
        })
        return review
    }

}
