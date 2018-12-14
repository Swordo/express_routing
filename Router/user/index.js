const express = require('express');
const router = express.Router();

router.get('/user/home', (req, res) => {
    res.send("User panel");
});

module.exports = router;