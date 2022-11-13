import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class reviewDto{
    
    @IsNotEmpty()
    HId : string

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    star:number

    @IsString()
    desc : string

    @IsString()
    @IsNotEmpty()
    service : string 
}