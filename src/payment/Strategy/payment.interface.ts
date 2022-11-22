export interface PaymentStrategy {
    pay(amount:number)
    status()
}
