export const authMsg = {
    headers: {
        'Authorization' : `Basic ${btoa(process.env.USER+":"+process.env.PASS)}`,
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'Connection' :'keep-alive',
        'Accept-Encoding':'gzip, deflate, br',
        'x-test-mode' : true,
        'env-id':'OAUTH2'
    },
    body:{
        "grant_type" : "client_credentials"
    }
}