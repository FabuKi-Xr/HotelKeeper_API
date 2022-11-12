import { 
    ArrayMinSize,
    ArrayNotContains,
    ArrayNotEmpty, 
    IsArray, 
    IsNotEmpty,
    IsNumber,
} from "class-validator";

export class CreateOrderDto {

    @IsNotEmpty()
    Hname : string;

    @IsNotEmpty()
    address : string;

    @IsNumber()
    @IsNotEmpty()
    cost : number;

    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @ArrayNotContains([""])
    @IsArray()
    @IsNotEmpty()
    service : string[];
}