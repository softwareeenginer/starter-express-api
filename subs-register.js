const express = require('express');
const router = express.Router();


// -------- REG SUB -------- //
router.post("/index", async (req, res) => {
    console.log("veri");
    res.json({
        success:200,
    })
});


module.exports = router;