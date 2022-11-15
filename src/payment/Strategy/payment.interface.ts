export interface PaymentStrategy {
    getQRcode(amount:number)
    getBankId()
    auth()
    cancelQR()
}
