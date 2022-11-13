import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { reviewDto } from './dto';
import { UpdateReviewDto } from './dto/updateReviewDto.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
    constructor(private reviewService:ReviewService){}

    @Get()
    findAll(){
        return this.reviewService.findAll()
    }
    @Get(':id')
    findById(@Param('id') id:string){
        return this.reviewService.findById(id)
    }
    @Post('create')
    createReview(@Body() dto:reviewDto){
        return this.reviewService.createReview(dto)
    }

    @Put('update/:id')
    updateReview(@Param('id') id:string ,@Body() dto:UpdateReviewDto){
        return this.reviewService.update(id,dto)
    }

}
