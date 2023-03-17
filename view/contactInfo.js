const contactInfo = [{"id":1,"contactInfoID":1,"type":"home","number":9999999999}];
const db = require('../models/index')
class ContactInfo {
  constructor (contactInfoID, type, number) {
    this.contactInfoID = contactInfoID
    this.type = type
    this.number = number
  }

    setUserID (id) {
    this.id = id
    }


  createPayload () {
    return {
      id: this.id,
      contactInfoID : this.contactInfoID,
      type : this.type,
      number : this.number
    }
  }

  async addContactInfo (transaction) {
    try {
        // const pushUser = contactInfo.push(this.createPayload());
        const contactInfos = await db.contactInfo.create(this.createPayload(), {
          transaction: transaction
        })
        return contactInfos
    } catch (error) {
      console.error(error)
    }
  }


  static async getContactInfoById (contactInfoID) {
    try {
    // const newContactInfoList = [];

    //     if(contactInfoID==0){
    //         console.error("0 is not allowed");
    //         return "0 is not allowed"
    //     }     
    //     for(let i=0;i<contactInfo.length;i++){
    //       if(contactInfo[i].contactInfoID == contactInfoID){
    //         newContactInfoList.push(contactInfo[i])
    //       }
    //     }
    const contactInfos = await db.contactInfo.findOne({
      where: { id: contactInfoID },
    })
        return contactInfos
    } catch (error) {
      console.error(error)
    }
  }

  static async getContactInfo () {
    try {
      const result = await db.contactInfo.findAll()

      return result
    } catch (error) {
      console.error(error)
    }
  }

  async updateContactInfo (transaction,contactInfoID) {
    try {
      const updatecontactinfo = await db.contactInfo.update(this.createPayload(), {
        where: {
          id: contactInfoID
        },
        transaction: transaction
      })

      return updatecontactinfo
    } catch (error) {
      console.error(error)
    }
  }

  static async deleteContactInfo (transaction,contactInfoID) {
    try {
      const result = await db.contactInfo.destroy({
        where: {
          id: contactInfoID
        },
        transaction: transaction
      })

      return result
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = { ContactInfo }
