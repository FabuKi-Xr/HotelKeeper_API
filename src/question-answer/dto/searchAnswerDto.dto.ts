import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class searchAnswerDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    QId : string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    OId : string

}