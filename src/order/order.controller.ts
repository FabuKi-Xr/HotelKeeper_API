import { Body, Controller, Post, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto,updateOrderDto } from './dto';
@Controller('order')
export class OrderController {
    constructor(private orderService:OrderService){

    }
    @Post('create')
    createOrder(@Body() dto:CreateOrderDto){
        return this.orderService.createOrder(dto)
    }
    @Post('update')
    updateOrder(@Body() dto:updateOrderDto){
        return this.orderService.updateOrder(dto)
    }
}
