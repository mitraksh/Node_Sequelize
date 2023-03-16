const { Contact } = require('../../../view/contact')
const db = require('../../../models')

const addContact = async contact => {
  const transaction = await db.sequelize.transaction()
  try {
    const contactData = await contact.addContact(transaction)
    await transaction.commit()
    return contactData
  } catch (error) {
   console.error(error)
  }
}

const getContactById = async contactID => {
  try {
    const contact = await Contact.getContactById(contactID)
    
    return contact
  } catch (error) {
    console.error(error)
  }
}

const getContact = async queryParams => {
  try {
    const contact = await Contact.getContact(queryParams)
    return contact
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  addContact,
  getContactById,
  getContact,
}
