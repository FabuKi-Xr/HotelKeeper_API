import { Type } from "class-transformer";
import { ArrayMinSize, 
    ArrayNotContains, 
    ArrayNotEmpty, 
    IsArray, 
    IsDate,  
    IsNotEmpty, 
    IsString,
    ValidateIf
} from "class-validator";

export class UpdateOrderDto{

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