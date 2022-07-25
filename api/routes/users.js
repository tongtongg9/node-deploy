const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', () => (req, res, next) => {
    let user = [
        {
            id: 1,
            username: 'admin',
            password: 'password',
            email: 'email.admin@gmail.com',
        },
        {
            id: 2,
            username: 'admin2',
            password: 'password',
            email: 'email.admin@gmail.com',
        },
        {
            id: 3,
            username: 'admin3',
            password: 'password',
            email: 'email.admin@gmail.com',
        },
    ]
    res.send(user)
})

module.exports = router
