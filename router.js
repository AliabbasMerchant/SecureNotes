const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
});

module.exports = router;