//มีเพื่ออัพเดตสถานะของคำสั่งซื้อ -> state ของคำสั่งซื้อ

import {IsEnum, IsNotEmpty, IsString,} from "class-validator";
import { OrderState } from "src/asset";
import {ApiProperty} from '@nestjs/swagger'
export class UpdateStateDto {
    @IsEnum(OrderState)
    @ApiProperty({
        description:'state of order',
        enum:OrderState,
    })
    state : OrderState

}

