import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto';
import { updateOrderDto } from './dto/updateOrderDto.dto';

@Injectable()
export class OrderService {
    constructor(private prisma : PrismaService){

    }
    createOrder(dto:CreateOrderDto){
        console.log(dto.service)
        return "Order was created"
    }

    updateOrder(dto:updateOrderDto){
        console.log(dto)
        return "Order was updated"
    }
}
