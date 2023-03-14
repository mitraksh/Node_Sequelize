const express = require('express')
const userRouter = require('./user')
const contactRouter = require('./contact')
const contactInfoRouter = require('./contactInfo')



const router = express.Router()

router.use('/user', userRouter)
router.use('/contact', contactRouter)
router.use('/contactInfo', contactInfoRouter)



module.exports = router
