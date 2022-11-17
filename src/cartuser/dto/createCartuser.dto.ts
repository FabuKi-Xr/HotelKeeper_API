import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { CartUserDTO } from './cartuser.dto';

export class CreateCartUserDTO extends CartUserDTO {
    @IsNotEmpty()
    cart_id: string;

    @IsNotEmpty()
    @IsString()
    u_id: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    total: number;
}
