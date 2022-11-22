import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class AnswerDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    QId : string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    OId : string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    ans : string
    

}