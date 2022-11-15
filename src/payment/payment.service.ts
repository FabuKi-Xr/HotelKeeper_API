import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QRcodeDto } from './dto/QRcodeDto.dto';
import { PaymentStrategy } from './Strategy';
import { TokenSingleton } from './Token';

@Injectable()
export class PaymentService {
    private payment:PaymentStrategy
    private token
    constructor(private prisma : PrismaService){
    }
    setPayment(payment:PaymentStrategy){
        this.payment = payment
    }

    async getQR(dto:QRcodeDto){
        return await this.payment.getQRcode(dto.amount)
    }
    async cancelQR(){
        return await this.payment.cancelQR()
    }
    
}
