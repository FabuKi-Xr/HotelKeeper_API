export interface PaymentStrategy {
    getQRcode(amount:number)
    auth()
}
