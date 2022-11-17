import { IsBoolean, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { CartUserDTO } from './cartuser.dto';

export class UpdateCartUserDTO extends CartUserDTO {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    total: number;

    @IsNotEmpty()
    @IsBoolean()
    order_request: boolean;
}
