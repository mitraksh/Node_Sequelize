const contactInfo = [{"id":1,"contactInfoID":1,"type":"home","number":9999999999}];
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
      id: contactInfo.length + 1,
      contactInfoID : this.contactInfoID,
      type : this.type,
      number : this.number
    }
  }

  async addContactInfo () {
    try {
        const pushUser = contactInfo.push(this.createPayload());
        return pushUser
    } catch (error) {
      console.error(error)
    }
  }


  static async getContactInfoById (contactInfoID) {
    try {
    const newContactInfoList = [];

        if(contactInfoID==0){
            console.error("0 is not allowed");
            return "0 is not allowed"
        }     
        for(let i=0;i<contactInfo.length;i++){
          if(contactInfo[i].contactInfoID == contactInfoID){
            newContactInfoList.push(contactInfo[i])
          }
        }
        return newContactInfoList
    } catch (error) {
      console.error(error)
    }
  }

  static async getContactInfo () {
    try {
      return contactInfo
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = { ContactInfo, contactInfo }
