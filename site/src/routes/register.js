const express = require('express');
const router = express.Router()

router.post('/', function (req, res) {
 res.render('register')
})

module.exports = router