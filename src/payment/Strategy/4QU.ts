import { HttpService } from "@nestjs/axios";
import { PaymentStrategy } from "./payment.interface";

export class Bank4QU implements PaymentStrategy{
    private bankID = "4QU"

    constructor(private httpservice:HttpService){
        
    }
    public pay(amount: number) {
        /*
        const res = await firstValueFrom(
            this.httpService.post(ลิงก์ปั๊ป , {

            })
            .pipe(
                catchError((error : AxiosError)=>{
                        this.logger.error(error.response.data)
                        throw "An error happened!"
                    }),
            )
        )

        */
        return {qrcode:`You have create pupz'bank ${amount} BHT`}
    }
    public status() {
        
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