const user = [{"id":1,"firstName":"mitraksh","lastName":"r","email":"mitraksh@gmail.com","password":"abc"}];
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
      id: user.length + 1,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    }
  }

  async addUser () {
    try {
        const pushUser = user.push(this.createPayload());
        return pushUser
    } catch (error) {
      console.error(error)
    }
  }


  static async getUserById (userID) {
    try {
      if(userID==0){
        console.error("0 is not allowed");
        return "0 is not allowed"
      }
      return user[userID-1]
    } catch (error) {
      console.error(error)
    }
  }

  static async getUser () {
    try {
      return user
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = { User, user }
