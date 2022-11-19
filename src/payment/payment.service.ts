import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePaidDto, QRcodeDto, PaymentDto } from './dto';
import { PaymentStrategy } from './Strategy';

@Injectable()
export class PaymentService {
    private payment:PaymentStrategy

    constructor(private prisma : PrismaService){
    }

    setPayment(payment:PaymentStrategy){
        this.payment = payment
    }

    ////////////////// create /////////////////////////
    async getQR(dto:QRcodeDto){ // for post
        // if (dto.bankID == "KBank"){
        //     this.payment = new PaymentMethodB(new HttpService)
        // }
        // if (dto.bankID == "4QU"){
        //     this.payment = new PaymentMethodA(new HttpService)
        // }
        const payDB:Prisma.PaymentCreateInput = await this.prisma.payment.create({
            data:{
                OId : dto.OId,
                bankID : dto.bankID,
                balance : dto.amount,
            }
        })
        return await this.payment.pay(dto.amount)
    }

    /////////////////// update /////////////////////
    // async cancelQR(){
    //     return await this.payment.cancelQR()
    // }
    async updatePaymentState(dto:UpdatePaidDto){
        console.log(dto)
        const update:Prisma.PaymentUpdateInput = await this.prisma.payment.update({
            where:{
                refId : dto.refId
            },
            data:{
                isPaid : dto.isPaid
            }
        })
        return "update payment successfully."
    }
    /////////////// getpaymentByOrderId ////////////////////
    async getPayment(dto:PaymentDto){
        console.log(dto)
        const data = await this.prisma.payment.findFirst({
            where:{

                OId : dto.OId,
                refId : dto.refId 
            }
        })
        return {data:data,msg:"Your request was fulfill.",statuscode:200}
    }
}
