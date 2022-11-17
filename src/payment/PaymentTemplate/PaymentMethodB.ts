import { HttpService } from "@nestjs/axios";
import {  Logger } from "@nestjs/common";
import { AxiosError, AxiosResponse } from "axios";
import { catchError, firstValueFrom, Observable } from "rxjs";
import { authMsg, cancelQRMsg, genQRMsg } from "../messages";
import { TokenSingleton } from "../Token";
import { PaymentTemplate } from "./payment.abstract";

export class PaymentMethodB extends PaymentTemplate{
    private readonly logger = new Logger(PaymentMethodB.name);
    private static bankID = "KBank"
    private token 
    constructor(private readonly httpService:HttpService){
        super()
        //this.httpService = new HttpService()
        //this.token = TokenSingleton.getInstance()
    }
    public static getBankId() {
        return this.bankID
    }
    async getQRcode(amount:number) {
        this.token = TokenSingleton.getInstance()
        if (this.token.getToken() == null){
            this.token.setToken(await this.auth())
        }
        
        console.log(this.token.getToken())
        TokenSingleton.objectTimeout()

        let date = await new Date().toLocaleString('sv-SE').split(' ')
        const {data} = await firstValueFrom(
            this.httpService.post(process.env.KBank_genQR,
                {...genQRMsg.body,
                    "txnAmount":amount,
                    "requestDt" : date[0]+"T"+date[1]+"Z"
                }
                ,{headers:{
                        "Authorization" : `Bearer ${this.token.getToken()}`,
                        ...genQRMsg.headers
                    }
                })
                .pipe(
                    catchError((error : AxiosError)=>{
                        this.logger.error(error.response.data)
                        throw "An error happened!"
                    }),
                ),
            );
        // console.log(data)
        return data
        
    }
    async auth() {
        // console.log("Auth")
        const {data} = await firstValueFrom(
            this.httpService.post(process.env.KBank_OAUTH,authMsg.body,{headers:authMsg.headers})
                .pipe(
                    catchError((error : AxiosError)=>{
                        this.logger.error(error.response.data)
                        throw "An error happened!"
                    }),
                ),
            );
        // this.token = data.access_token
        return data.access_token
    }
    async cancelQR(){
        let date = await new Date().toLocaleString('sv-SE').split(' ')
        const {data} = await firstValueFrom(
            this.httpService.post(process.env.KBank_cancelQR,
                {...cancelQRMsg.body,
                    "requestDt" : date[0]+"T"+date[1]+"Z"
                }
                ,{headers:{
                        "Authorization" : `Bearer ${this.token.getToken()}`,
                        ...cancelQRMsg.headers
                    }
                })
                .pipe(
                    catchError((error : AxiosError)=>{
                        this.logger.error(error.response.data)
                        throw "An error happened!"
                    }),
                ),
            );
        // console.log(data)
        return data
    }
}