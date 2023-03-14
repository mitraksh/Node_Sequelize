const { Contact, contact } = require('../../../view/contact')

const addContact = async contact => {
  try {
    const contactData = await contact.addContact()
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
