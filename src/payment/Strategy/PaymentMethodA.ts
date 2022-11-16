import { PaymentTemplate } from "./payment.abstract";
import { PaymentStrategy } from "./payment.interface";

export class PaymentMethodA extends PaymentTemplate{
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