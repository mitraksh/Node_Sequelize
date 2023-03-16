const { User } = require('../../../view/user')
const jwt = require('../../../middleware/jwt');
const db = require('../../../models')


const addUser = async user => {
  const transaction = await db.sequelize.transaction()
  try {
    const userData = await user.addUser(transaction)
    await transaction.commit()
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
    const user = await User.getUser()
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
