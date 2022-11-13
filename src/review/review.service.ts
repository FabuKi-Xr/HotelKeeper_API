import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { reviewDto } from './dto';
import { UpdateReviewDto } from './dto/updateReviewDto.dto';

@Injectable()
export class ReviewService {
    constructor (private prisma : PrismaService){}
    async createReview(dto:reviewDto){
        const review:Prisma.ReviewCreateInput = await this.prisma.review.create({
            data:{
                HId : dto.HId,
                star : dto.star,
                desc : dto.desc,
                service : dto.service
            }
        })
        return "You have created a Review."
    }

    async update(id:string,dto:UpdateReviewDto){
        const review = await this.prisma.review.findFirst({
            where:{
                RId : id
            }
        })
        if (!review){
            return "This review didnt exist."
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
