export const cancelQRMsg = {
    headers:{
        'Content-Type' : 'application/json',
        'Accept': '*/*',
        'Connection' :'keep-alive',
        'Accept-Encoding':'gzip, deflate, br',
        'x-test-mode' : true,
        'env-id':'QR008'
    },
    body:{
        "merchantId": process.env.mxID,
        "partnerId": process.env.pxID,
        "partnerSecret": process.env.pxSecret,
        "partnerTxnUid": process.env.partnerTxnUidCancelQR,
        "origPartnerTxnUid": process.env.origPartnerTxnUidCancel,
    }
}