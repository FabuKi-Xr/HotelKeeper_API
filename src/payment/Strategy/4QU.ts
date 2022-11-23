import { HttpService } from "@nestjs/axios";
import { Logger } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";
import { PaymentStrategy } from "./payment.interface";

export class Bank4QU implements PaymentStrategy{
    private bankID = "4QU"
    private readonly logger = new Logger(Bank4QU.name);
    constructor(private httpService:HttpService){
        
    }
    public async pay(amount: number) {
        let date = await new Date().toLocaleString('sv-SE').split(' ')
        const url = await this.getqrURL(amount)
        return url
    }
    private async getqrURL(amount){
        const data = await firstValueFrom(
            this.httpService.post(process.env.pup_genQR,
                {
                    "accountName": "UP TO YOU",
                    "accountNumber": "5893667864",
                    "amount": amount,
                    "timeAmount": 500
                })
                .pipe(
                    catchError((error : AxiosError)=>{
                        this.logger.error(error.response.data)
                        throw "An error happened!"
                    }),
                ),
            );
        return data
    }
    public status() {
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