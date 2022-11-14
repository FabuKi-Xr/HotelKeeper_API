import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import axios, { AxiosError, AxiosResponse } from "axios";
import { catchError, firstValueFrom, Observable } from "rxjs";
import { authMsg, genQRMsg } from "../messages";
import { PaymentStrategy } from "./payment.interface";

export class PaymentMethodB implements PaymentStrategy{
    private readonly logger = new Logger(PaymentMethodB.name);
    private token 
    constructor(private readonly httpService:HttpService){
        this.httpService = new HttpService()
        this.token = null
    }
    async getQRcode(amount:number) {
        await this.auth()
        let date = await new Date().toLocaleString('sv-SE').split(' ')
        const {data} = await firstValueFrom(
            this.httpService.post(process.env.KBank_genQR,
                {...genQRMsg.body,
                    "txnAmount":amount,
                    "requestDt" : date[0]+"T"+date[1]+"Z"
                }
                ,{headers:{
                        "Authorization" : `Bearer ${this.token}`,
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
        console.log(data)
        
    }
    async auth() {
        console.log("Auth")
        const {data} = await firstValueFrom(
            this.httpService.post(process.env.KBank_OAUTH,authMsg.body,{headers:authMsg.headers})
                .pipe(
                    catchError((error : AxiosError)=>{
                        this.logger.error(error.response.data)
                        throw "An error happened!"
                    }),
                ),
            );
        this.token = data.access_token
        console.log(this.token)
        return 
    }
    
}