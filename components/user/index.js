const express = require('express')
const {
  createUser,
  getUserById,
  getUser,
  jwtLoginVerify,
  updateUsers,
  deleteUsers,
} = require('./controller/user.js')
const JwtToken = require('../../middleware/jwt')

const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.get('/', getUser)
userRouter.get('/:userID', getUserById)
userRouter.post('/login',JwtToken.verify, jwtLoginVerify)
userRouter.put('/:userID', updateUsers)
userRouter.delete('/:userID', deleteUsers)



module.exports = userRouter
