// const user = [{"id":1,"firstName":"mitraksh","lastName":"r","email":"mitraksh@gmail.com","password":"abc"}];
const { Op } = require('sequelize')
const db = require('../models/index')
class User {
  constructor (firstName, lastName, email, password) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
  }

    setUserID (id) {
    this.id = id
    }


  createPayload () {
    return {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
    }
  }

  async addUser (transaction) {
    try {
      const users = await db.user.create(this.createPayload(), {
        transaction: transaction
      })
        // const pushUser = user.push(this.createPayload());
        return users
    } catch (error) {
      console.error(error)
    }
  }


  static async getUserById (userID) {
    try {
      // if(userID==0){
      //   console.error("0 is not allowed");
      //   return "0 is not allowed"
      // }

      const user = await db.user.findOne({
        where: { id: userID },
        attributes: {
          exclude: ['password', 'created_at', 'updated_at', 'deleted_at']
        },
      })

      return user
    } catch (error) {
      console.error(error)
    }
  }

  static async getUser (queryParams) {
    try {
      const result = await db.user.findAll()

      return result
    } catch (error) {
      console.error(error)
    }
  }

   async updateUser (transaction,userID) {
    try {
      const updateuser = await db.user.update(this.createPayload(), {
        where: {
          id: userID
        },
        transaction: transaction
      })

      return updateuser
    } catch (error) {
      console.error(error)
    }
  }

  static async deleteUser (transaction,userID) {
    try {
      const result = await db.user.destroy({
        where: {
          id: userID
        },
        transaction: transaction
      })

      return result
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = { User }
