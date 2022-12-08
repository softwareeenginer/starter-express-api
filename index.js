const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log(res.header)
    res.send('IN APP PURCHASE IS LISTENING')
})
app.listen(process.env.PORT || 3000)