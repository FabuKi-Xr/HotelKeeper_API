import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class QRcodeDto{
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    amount : number
}