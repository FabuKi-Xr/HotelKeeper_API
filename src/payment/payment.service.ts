import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QRcodeDto } from './dto/QRcodeDto.dto';
import { PaymentStrategy } from './Strategy';

@Injectable()
export class PaymentService {
    private payment:PaymentStrategy
    constructor(private prisma : PrismaService){
    }
    setPayment(payment:PaymentStrategy){
        this.payment = payment
    }

    async getQR(dto:QRcodeDto){
        return await this.payment.getQRcode(dto.amount)
    }
}
