const express = require('express')
const app = express();
const subsRegister = require("./subs-register");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/subs-register", subsRegister);

app.post('/kldsmakldmklsadaslk', (req, res) => {x

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


// catch 404 and forward to error handler

app.use((req, res, next) => {
    console.log("durum")
    //console.log(req, res, next);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: err.message });
});

