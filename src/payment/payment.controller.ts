import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get,Param,Post, Put } from '@nestjs/common';
import { PaymentDto, UpdatePaidDto } from './dto';
import { QRcodeDto } from './dto/QRcodeDto.dto';
import { PaymentService } from './payment.service';
import { KBank , Bank4QU } from './Strategy';
import { Mastercard } from './Strategy/mastercard';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService:PaymentService){

    }
    @Post('QRpayment')
    async getQRpayment(@Body() dto:QRcodeDto){
        if (dto.bankID === "KBank"){
            console.log('A')
            await this.paymentService.setPayment(new KBank(new HttpService))
        }
        if (dto.bankID === "4QU"){
            console.log('B')
            await this.paymentService.setPayment(new Bank4QU(new HttpService)) 
        }
        if (dto.bankID === "Mastercard"){
            console.log('C')
            await this.paymentService.setPayment(new Mastercard(new HttpService))
        }
        return this.paymentService.getQR(dto)
    }
    // @Post('KB/cancel')
    // cancelQR(){
    //     return this.paymentService.cancelQR()
    // }
    @Get('status/:id')
    status(@Param('id') id :string){
        return this.paymentService.updateStatus(id)
    }
    @Post()
    getPayment(@Body() dto:PaymentDto){
        return this.paymentService.getPayment(dto)
    }
    @Put('/update')
    updatePaymentState(@Body() dto:UpdatePaidDto){
        return this.paymentService.updatePaymentState(dto)
    }
}
