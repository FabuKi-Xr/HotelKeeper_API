import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto';

@Injectable()
export class OrderService {
    constructor(private prisma : PrismaService){

    }
    createOrder(dto:CreateOrderDto){
        return "Order was created"
    }
}
