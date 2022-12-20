const express = require('express')
const app = express()
var jose = require('node-jose');
const aes256 = require('aes256');
const jwt = require("jsonwebtoken");

app.all('/', (req, res) => {

    console.log("Req data: " + req.data);

    console.log("req headers: " + req.headers)

    console.log("req payload:" + req.payload)


    /*
    const decode = jwt.decode(signedPayload);
    const decodeSignedTransactionInfo = jwt.decode(decode.data.signedTransactionInfo)
    const decodesignedRenewalInfo = jwt.decode(decode.data.signedRenewalInfo)
    console.log(decode)
    console.log("\n\n")
    console.log(decodeSignedTransactionInfo, decodesignedRenewalInfo)
    */
    res.send('IN APP PURCHASE IS LISTENING')
})
app.listen(process.env.PORT || 3000);

