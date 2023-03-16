const express = require('express')
const {
  createUser,
  getUserById,
  getUser,
  jwtLoginVerify
} = require('./controller/user.js')
const JwtToken = require('../../middleware/jwt')

const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.get('/', getUser)
userRouter.get('/:userID', getUserById)
userRouter.post('/login',JwtToken.verify, jwtLoginVerify)

module.exports = userRouter
