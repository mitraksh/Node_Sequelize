const { StatusCodes } = require('http-status-codes')
const {
  addUser,
  getUserById: getUserByIdService,
  getUser: getUserService,
} = require('../service/user')
const { User, user } = require('../../../view/user')

const createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body
    const user = new User(firstName, lastName, email, password)
    const userData = await addUser(user)
    
    res.status(StatusCodes.CREATED).json(userData)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const getUserById = async (req, res, next) => {
  try {
    const userData = await getUserByIdService(req.params.userID)
    res.status(StatusCodes.OK).json(userData)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const getUser = async (req, res, next) => {
  try {
    const queryParams = req.query
    const userData = await getUserService(queryParams)
    res.status(StatusCodes.OK).json(userData)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

module.exports = {
  createUser,
  getUserById,
  getUser,
}
