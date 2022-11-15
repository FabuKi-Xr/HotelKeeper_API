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
        const bankID = this.payment.getBankId()
        
        const payDB:Prisma.PaymentCreateInput = await this.prisma.payment.create({
            data:{
                OId : dto.OId,
                bankID : dto.bankID,
                balance : dto.amount,
            }
        })
        return await this.payment.getQRcode(dto.amount)
    }

    /////////////////// update /////////////////////
    async cancelQR(){
        return await this.payment.cancelQR()
    }
    async updatePaymentState(dto:UpdatePaidDto){
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
        const data = await this.prisma.payment.findFirst({
            where:{

                OId : dto.OId,
                refId : dto.refId 
            }
        })
        return {data:data,msg:"Your request was fulfill.",statuscode:200}
    }
}
