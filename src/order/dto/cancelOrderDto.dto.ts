import { IsNotIn, IsString } from "class-validator";


export class CreateOrderDto {
    @IsString()
    @IsNotIn([""])
    OId : String;
}