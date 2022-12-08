const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("REQUEST !!!!: " + "\n\n\n" + req)
    console.log("RESPONSE !!!!: " + "\n\n\n" + res)
    res.send('IN APP PURCHASE IS LISTENING')
})
app.listen(process.env.PORT || 3000)