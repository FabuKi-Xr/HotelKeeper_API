import { HttpService } from "@nestjs/axios";
import { PaymentStrategy } from "./payment.interface";

export class PaymentMethodA implements PaymentStrategy{
    private bankID = "Q4U"

    constructor(private httpservice:HttpService){
        
    }
    public pay(amount: number) {
        
    }
    // async getBankId() {
    //     return this.bankID
    // }
    // async getQRcode(amount:number) {
    // }
    // async auth() {
    // }
    // async cancelQR() {
    // }
}