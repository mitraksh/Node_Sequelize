const { ContactInfo, contactInfo } = require('../../../view/contactInfo')

const addContactInfo = async contactInfo => {
  try {
    const contactInfoData = await contactInfo.addContactInfo()
    return contactInfoData
  } catch (error) {
   console.error(error)
  }
}

const getContactInfoById = async contactInfoID => {
  try {
    const contactInfo = await ContactInfo.getContactInfoById(contactInfoID)
    return contactInfo
  } catch (error) {
    console.error(error)
  }
}

const getContactInfo = () => {
  try {
    const contactInfo = ContactInfo.getContactInfo()
    return contactInfo
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  addContactInfo,
  getContactInfoById,
  getContactInfo,
}
