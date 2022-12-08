const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log(req, res)
    res.send('IN APP PURCHASE IS LISTENING')
})
app.listen(process.env.PORT || 3000)