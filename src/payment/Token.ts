export class TokenSingleton {
    private static instance = null
    private token
    private static timeout = 900000
    constructor(){
    }

    public static getInstance() : TokenSingleton{
        if (this.instance == null){
            this.instance = new TokenSingleton()
        }
        return this.instance
    }

    public setToken(token:string){
        this.token = token
    }
    public getToken():string{
        return this.token
    }

    public static objectTimeout(){
        if (this.instance != null) {
            setTimeout(() => {
                this.instance = null
            }, this.timeout);
        }
    }

}