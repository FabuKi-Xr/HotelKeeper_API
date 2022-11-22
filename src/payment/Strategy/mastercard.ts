import { HttpService } from "@nestjs/axios";
import { PaymentStrategy } from "./payment.interface";

export class Mastercard implements PaymentStrategy{
    constructor(private httpService:HttpService){

    }
    
    public async pay(amount: number) {
        return `You have paid by mastercard ${amount}`
    }
    public async status() {
        let status = "paid"
        if (status === "paid")
        {
            status = "PAID"
        }
        return {
            status: status,
            statuscode: 200
        }
    }

}