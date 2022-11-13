import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto,UpdateOrderDto,UpdateStateDto } from './dto';

@Injectable()
export class OrderService {
    constructor(private prisma : PrismaService){

    }
////////////////// Create ////////////////////////////
    async createOrder(dto:CreateOrderDto){
        
        const order:Prisma.OrderCreateInput = await this.prisma.order.create({
            data:{
                HId : dto.HId,
                Hname : dto.Hname,
                addr : dto.addr,
                cost : dto.cost,
                service : dto.service,
                startTime : dto.startTime,
            }
        })
        return "Order was created"
    }

////////////////// Update ////////////////////////////
    async updateOrder(id:string,dto:UpdateOrderDto){
        const order = await this.prisma.order.findFirst({
            where:{
                OId : id
            }
        })
        if (order.state != 0){
            return "You cannot update this order."
        }
        const update = await this.prisma.order.update({
            where:{
                OId:id,
            },
            data:{
                service     :   dto.service,
                startTime   :   dto.startTime,
                endTime     :   dto.endTime
            }
        })
        
        return "Order was updated"
    }
    async updateState(id:string,dto : UpdateStateDto){
        const update = await this.prisma.order.update({
            where:{
                OId:id
            },
            data:{
                state : dto.state
            }
        })
        return "State was updated"
    }
////////////////// Get ////////////////////////////   
    async getOrder(HId : string){
        const order = await this.prisma.order.findMany({
            where:{
                HId : HId
            },
        })
        console.log(new Date().toISOString())
        return {
            timestamp : new Date().toISOString(),
            order}
    }
}
