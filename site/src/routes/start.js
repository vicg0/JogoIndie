var express = require('express')
var router = express.Router()

router.get('/start', function (req, res) {
 res.render('start')
})

module.exports = router