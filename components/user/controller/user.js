const { StatusCodes } = require('http-status-codes')
const {
  addUser,
  getUserById: getUserByIdService,
  getUser: getUserService,
  updateUsers:updateUserService,
  deleteUsers:deleteUserService,
} = require('../service/user')
const { User, user } = require('../../../view/user')
const JwtToken = require('../../../middleware/jwt')
const createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body
    const user = new User(firstName, lastName, email, password)
    const userData = await addUser(user)

    const jwt = new JwtToken(firstName, lastName, email)
    const token = jwt.generate()

    res.cookie("authorization", token)
    
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
    const userData = await getUserService()
    res.status(StatusCodes.OK).json(userData)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const jwtLoginVerify = async (req, res, next) => {
  try {
    const {email,password} = req.body
    if(!email && !password){
    res.send("Email or Password not provided")
    return 
    }else{
      for(let c=0;c<user.length;c++){
        if(user[c].email == email && user[c].password == password){
          console.log("email and password Found");
          res.send("email and password Found")
          break
        }
      }
      res.status(StatusCodes.OK)
    }
    
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const updateUsers = async (req,res,next) => {
  const {firstName, lastName, email, password} = req.body
  const userID = req.params.userID
  const user = new User(firstName, lastName, email, password)
  const userData = await updateUserService(user,userID)
  res.status(StatusCodes.OK).json(userData)
}

const deleteUsers = async (req,res,next) => {
  const userID = req.params.userID
  // console.log(userID)
  const userData = await deleteUserService(userID)
  res.status(StatusCodes.OK).json(userData)
}

module.exports = {
  createUser,
  getUserById,
  getUser,
  jwtLoginVerify,
  updateUsers,
  deleteUsers,
}
