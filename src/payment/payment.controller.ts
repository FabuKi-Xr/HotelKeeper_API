import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get,Post } from '@nestjs/common';
import { PaymentDto, UpdatePaidDto } from './dto';
import { QRcodeDto } from './dto/QRcodeDto.dto';
import { PaymentService } from './payment.service';
import { PaymentMethodB } from './Strategy';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService:PaymentService){

    }
    @Post('KB/QRpayment')
    getQRpayment(@Body() dto:QRcodeDto){
        let payment = new PaymentMethodB(new HttpService())
        this.paymentService.setPayment(payment)
        return this.paymentService.getQR(dto)
    }
    @Post('KB/cancel')
    cancelQR(){
        return this.paymentService.cancelQR()
    }

    @Post()
    getPayment(@Body() dto:PaymentDto){
        return this.paymentService.getPayment(dto)
    }
}
