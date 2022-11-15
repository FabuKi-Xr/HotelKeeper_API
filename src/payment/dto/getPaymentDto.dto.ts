import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class PaymentDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    OId : string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    refId : string
}