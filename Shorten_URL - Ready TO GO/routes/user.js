const express = require('express')
const {handleUserSingUp,handleUserLogin,handleUserLogOut} = require('../controllers/user')

const router = express.Router()

router.post('/',handleUserSingUp)
router.post('/login',handleUserLogin)
router.get('/logout',handleUserLogOut)

module.exports = router