const express = require('express');
const router = express.Router();

router.get('/res/home', (req, res) => {
    res.send("Res panel");
});

module.exports = router;