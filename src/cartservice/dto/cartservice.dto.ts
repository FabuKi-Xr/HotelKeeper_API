import { Type } from 'class-transformer';
import {
    IsDate,
    IsNotEmpty,
    IsNumber,
    IsString,
    ValidateIf,
} from 'class-validator';

export class CartServiceDTO {
    @IsNotEmpty()
    @IsString()
    cart_id: string;

    @IsNotEmpty()
    @IsString()
    s_id: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    time_start: Date;

    @ValidateIf((o) => o.otherProperty === 'value')
    @IsDate()
    @Type(() => Date)
    time_finish: Date;

    @IsNotEmpty()
    @IsNumber()
    num_maid: number;
}
