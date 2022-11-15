import { ApiProperty } from "@nestjs/swagger";
import {  IsBoolean, IsNotEmpty, IsNumber, IsString, ValidateIf } from "class-validator";

export class QRcodeDto{
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    amount : number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    OId : string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    bankID : string

}