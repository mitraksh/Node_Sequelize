const contact = [{"id":1,"userID":1,"name":"mitraksh"}];
const db = require('../models/index')

class Contact {
  constructor (userID, name) {
    this.userID = userID
    this.name = name
  }

    setUserID (id) {
    this.id = id
    }


  createPayload () {
    return {
      id: this.id,
      userID: this.userID,
      name: this.name,
    }
  }

  async addContact (transaction) {
    try {
        // const pushUser = contact.push(this.createPayload());
        const contacts = await db.contact.create(this.createPayload(), {
          transaction: transaction
        })
        return contacts
        return pushUser
    } catch (error) {
      console.error(error)
    }
  }


  static async getContactById (contactID) {
    try {
    // const newContactList = [];

    //     if(contactID==0){
    //         console.error("0 is not allowed");
    //         return "0 is not allowed"
    //     }     
    //     for(let i=0;i<contact.length;i++){
    //       if(contact[i].userID == contactID){
    //         newContactList.push(contact[i])
    //       }
    //     }
    const contacts = await db.contact.findOne({
      where: { id: contactID },
    })
        return contacts
    } catch (error) {
      console.error(error)
    }
  }

  static async getContact () {
    try {
      const result = await db.contact.findAll()

      return result
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = { Contact }
