const express = require('express')
const {
  createUser,
  getUserById,
  getUser,
} = require('./controller/user.js')

const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.get('/', getUser)
userRouter.get('/:userID', getUserById)

module.exports = userRouter
