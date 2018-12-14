const express = require('express');
const router = express.Router();

router.get('/admin/home', (req, res) => {
    res.send("admin panel");
});

module.exports = router;