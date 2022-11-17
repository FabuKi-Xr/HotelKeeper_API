import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsString,
    Min,
} from 'class-validator';

export class CartUserDTO {
    @IsNotEmpty()
    cart_id: string;

    @IsNotEmpty()
    @IsString()
    u_id: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    total: number;

    @IsNotEmpty()
    @IsBoolean()
    order_request: boolean;
}
