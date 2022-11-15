import { PaymentStrategy } from "./payment.interface";

export class PaymentMethodA implements PaymentStrategy{
    private bankID = "Q4U"
    async getBankId() {
        return this.bankID
    }
    async getQRcode(amount:number) {
        
    }
    async auth() {
        
    }
    async cancelQR() {
        
    }
}