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

const getContact = async () => {
  try {
    const contact = await Contact.getContact()
    return contact
  } catch (error) {
    console.error(error)
  }
}

const updateContacts = async (contact,contactID) => {
  const transaction = await db.sequelize.transaction()
  try {
    const contactupdate = await contact.updateContact(transaction,contactID)
    await transaction.commit()
    return contactupdate
  } catch (error) {
    console.error(error)
  }
}

const deleteContacts = async (contactID) => {
  const transaction = await db.sequelize.transaction()
  try {
    const contactdelete = await Contact.deleteContact(transaction,contactID)
    return contactdelete
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  addContact,
  getContactById,
  getContact,
  updateContacts,
  deleteContacts
}
