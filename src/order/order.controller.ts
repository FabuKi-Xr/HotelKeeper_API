import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto,UpdateOrderDto,UpdateStateDto } from './dto';
@Controller('order')
export class OrderController {
    constructor(private orderService:OrderService){

    }
////////////////// Get ///////////////////////
    @Get(':id')
    getOrder(@Param('id') id:string){
        return this.orderService.getOrder(id)
    }
    @Post('create')
    createOrder(@Body() dto:CreateOrderDto){
        //console.log(typeof dto.startTime)
        return this.orderService.createOrder(dto)
    }
    @Post('update')
    updateOrder(@Body() dto:UpdateOrderDto){
        return this.orderService.updateOrder(dto)
    }
    @Post('state')
    updateState(@Body() dto:UpdateStateDto){
        return this.orderService.updateState(dto)
    }
}
