import { HttpService } from "@nestjs/axios";
import { PaymentTemplate } from "./payment.abstract";

export class PaymentMethodA extends PaymentTemplate{
    private static bankID = "4QU"
    constructor(private httpService:HttpService){
        super()
    }
    public static getBankId() {
        return this.bankID
    }
    async getQRcode(amount:number) {
        return "สวัสดีจ้า สาววาย"
    }
    async auth() {
    }
    async cancelQR() {
    }
}