import { HttpService } from "@nestjs/axios";
import {  Logger } from "@nestjs/common";
import { AxiosError, AxiosResponse } from "axios";
import { catchError, firstValueFrom, Observable } from "rxjs";
import { authMsg, cancelQRMsg, genQRMsg, KbankQRstate } from "../messages";
import { TokenSingleton } from "../Token";
import { PaymentStrategy } from "./payment.interface";

export class KBank implements PaymentStrategy{
    private readonly logger = new Logger(KBank.name);
    private bankID = "KBank"
    private token 
    constructor(private readonly httpService:HttpService){
        //this.httpService = new HttpService()
        // this.token = TokenSingleton.getInstance()
    }
    public async pay(amount: number) {
        this.token = TokenSingleton.getInstance()
        if (this.token.getToken() == null){
            this.token.setToken(await this.auth())
            TokenSingleton.objectTimeout()
        }
        return await this.getQRcode(amount)
    }
    private async getQRcode(amount:number) {

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
    private async auth() {
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
    public async status() {
        let date = await new Date().toLocaleString('sv-SE').split(' ')
        const {data} = await firstValueFrom(
            this.httpService.post(process.env.KBank_status,{
                ...KbankQRstate.body,
                "requestDt" : date[0]+"T"+date[1]+"Z"
            },
            {
                headers:{
                    "Authorization" : `Bearer ${this.token.getToken()}`,
                    ...KbankQRstate.headers
                }
            })
            .pipe(
                catchError((error : AxiosError)=>{
                    this.logger.error(error.response.data)
                    throw "An error happened!"
                }),
            ),
        )
        // console.log(">>>",data)
        return {
            status :data.txnStatus,
            statuscode: 200
        }
    }
}