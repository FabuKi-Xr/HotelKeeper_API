import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class reviewDto{
    
    @IsNotEmpty()
    HId : string
    @IsNotEmpty()
    Hname : string

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