import { Body, Controller, Post, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { Request } from 'express';
import { CreateOrderDto } from './dto';
@Controller('order')
export class OrderController {
    constructor(private orderService:OrderService){

    }
    @Post('create')
    createOrder(@Body() dto:CreateOrderDto){
        return this.orderService.createOrder(dto)
    }
}
