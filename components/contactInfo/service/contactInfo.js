const { ContactInfo } = require('../../../view/contactInfo')
const db = require('../../../models')

const addContactInfo = async contactInfo => {
  const transaction = await db.sequelize.transaction()
  try {
    const contactInfoData = await contactInfo.addContactInfo(transaction)
    await transaction.commit()
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
