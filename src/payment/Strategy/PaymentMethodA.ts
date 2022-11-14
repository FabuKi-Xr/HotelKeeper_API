import { PaymentStrategy } from "./payment.interface";

export class PaymentMethodA implements PaymentStrategy{
    async getQRcode(amount:number) {
        
    }
    async auth() {
        
    }
}