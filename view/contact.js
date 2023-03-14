const contact = [{"id":1,"userID":1,"name":"mitraksh"}];
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
      id: contact.length + 1,
      userID: this.userID,
      name: this.name,
    }
  }

  async addContact () {
    try {
        const pushUser = contact.push(this.createPayload());
        return pushUser
    } catch (error) {
      console.error(error)
    }
  }


  static async getContactById (contactID) {
    try {
    const newContactList = [];

        if(contactID==0){
            console.error("0 is not allowed");
            return "0 is not allowed"
        }     
        for(let i=0;i<contact.length;i++){
          if(contact[i].userID == contactID){
            newContactList.push(contact[i])
          }
        }
        return newContactList
    } catch (error) {
      console.error(error)
    }
  }

  static async getContact () {
    try {
      return contact
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = { Contact, contact }
