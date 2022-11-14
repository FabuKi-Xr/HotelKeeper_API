export const genQRMsg ={
    headers:{
        'Content-Type' : 'application/json',
        'Accept': '*/*',
        'Connection' :'keep-alive',
        'Accept-Encoding':'gzip, deflate, br',
        'x-test-mode' : true,
        'env-id':'QR002'
    },
    body:{
        "merchantId": process.env.mxID,
        "partnerId": process.env.pxID,
        "partnerSecret": process.env.pxSecret,
        "partnerTxnUid": process.env.partnerTxnUid,
        "qrType": 3,
        "reference1": process.env.ref134,
        "reference2": process.env.ref2,
        "reference3": process.env.ref134,
        "reference4": process.env.ref134,
        "txnCurrencyCode": "THB"
    }
}