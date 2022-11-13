import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaymentStrategy } from './Strategy/payment.interface';

@Injectable()
export class PaymentService {
    private payment : PaymentStrategy
    constructor(private prisma : PrismaService){
    }
}
