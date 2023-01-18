const express = require('express')
const app = express();
const subsRegister = require("./subs-register");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/subs-register", subsRegister);


app.all('/', (req, res) => {

    // -- SIGNED PAYLOAD -- //
    const signedPayload = req.body?.signedPayload;

    // -- DECODE -- //
    const decode = jwt.decode(signedPayload);
    const decodeSignedTransactionInfo = jwt.decode(decode?.data?.signedTransactionInfo);
    const decodesignedRenewalInfo = jwt.decode(decode?.data?.signedRenewalInfo);
    console.log(decode);
    console.log("\n\n\n");
    console.log(decodeSignedTransactionInfo, decodesignedRenewalInfo);
    res.send('IN APP PURCHASE IS LISTENING');
});
app.listen(process.env.PORT || 3000);

