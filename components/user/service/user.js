const { User, user } = require('../../../view/user')
const jwt = require('../../../middleware/jwt');

const addUser = async user => {
  try {
    const userData = await user.addUser()
    return userData
  } catch (error) {
   console.error(error)
  }
}

const getUserById = async userID => {
  try {
    const user = await User.getUserById(userID)
    return user
  } catch (error) {
    console.error(error)
  }
}

const getUser = async queryParams => {
  try {
    const user = await User.getUser(queryParams)
    return user
  } catch (error) {
    console.error(error)
  }
}


module.exports = {
  addUser,
  getUserById,
  getUser,
}
