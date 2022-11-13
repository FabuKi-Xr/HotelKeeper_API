import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { 
    ArrayMinSize,
    ArrayNotContains,
    ArrayNotEmpty, 
    IsArray, 
    IsDate,  
    IsNotEmpty,
    IsNumber,
    ValidateIf,
} from "class-validator";

export class CreateOrderDto {

    @IsNotEmpty()
    HId :string

    @IsNotEmpty()
    Hname : string;

    @IsNotEmpty()
    addr : string;

    @IsNumber()
    @IsNotEmpty()
    cost : number;

    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @ArrayNotContains([""])
    @IsArray()
    @IsNotEmpty()
    service : string[]; // id

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    startTime : Date

    @ValidateIf(o => o.otherProperty === 'value')
    @IsDate()
    endTime : Date
}