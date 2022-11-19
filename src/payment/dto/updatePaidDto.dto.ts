import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdatePaidDto{

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    refId : string
    
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isPaid : boolean
}