export const KbankQRstate = {
    headers:{
        'Content-Type' : 'application/json',
        'Accept': '*/*',
        'Connection' :'keep-alive',
        'Accept-Encoding':'gzip, deflate, br',
        'x-test-mode' : true,
        'env-id':'QR004'
    },
    body:{
        "merchantId": "KB102057149704",
        "origPartnerTxnUid": "PARTNERTEST0001",
        "partnerId": "PTR1051673",
        "partnerSecret": "d4bded59200547bc85903574a293831b",
        "partnerTxnUid": "PARTNERTEST0002",
    }
}