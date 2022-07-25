const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', () => (req, res, next) => {
    res.status(200).json({
        status: true,
        message: 'Hello! Docker iam Mr.Kampon',
    })
})

module.exports = router
