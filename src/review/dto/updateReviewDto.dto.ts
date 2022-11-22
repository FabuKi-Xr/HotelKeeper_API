import { ApiProperty } from "@nestjs/swagger";
import { isNotEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ReviewDto } from "./reviewDto.dto";

export class UpdateReviewDto extends ReviewDto{
}