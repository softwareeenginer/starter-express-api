const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("REQUEST !!!!: " + "\n\n\n")
    console.log(req)
    console.log("RESPONSE !!!!: " + "\n\n\n")
    console.log(res)
    res.send('IN APP PURCHASE IS LISTENING')
})
app.listen(process.env.PORT || 3000)