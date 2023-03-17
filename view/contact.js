const contact = [{"id":1,"userID":1,"name":"mitraksh"}];
const db = require('../models/index')

class Contact {
  constructor (userID, name) {
    this.userID = userID
    this.name = name
  }

    setContactID (id) {
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
        // const pushContact = contact.push(this.createPayload());
        const contacts = await db.contact.create(this.createPayload(), {
          transaction: transaction
        })
        return contacts
        return pushContact
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
      include: {
          model: db.user,
          required: true
        },
    })
        return contacts
    } catch (error) {
      console.error(error)
    }
  }

  static async getContact () {
    try {
      const result = await db.contact.findAll({
        include: {
            model: db.user,
            // where: { deleted_at: null },
            required: true,
          },
      })

      return result
    } catch (error) {
      console.error(error)
    }
  }

  async updateContact (transaction,contactID) {
    try {
      const updateuser = await db.contact.update(this.createPayload(), {
        where: {
          id: contactID
        },
        transaction: transaction
      })

      return updateuser
    } catch (error) {
      console.error(error)
    }
  }

  static async deleteContact (transaction,contactID) {
    try {
      const result = await db.contact.destroy({
        where: {
          id: contactID
        },
        transaction: transaction
      })

      return result
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = { Contact }
