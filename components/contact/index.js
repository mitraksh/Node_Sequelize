const express = require('express')
const {
  createContact,
  getContactById,
  getContact,
  updateContacts,
  deleteContacts,
} = require('./controller/contact.js')

const contactRouter = express.Router()

contactRouter.post('/:userID', createContact)
contactRouter.get('/', getContact)
contactRouter.get('/:userID', getContactById)
contactRouter.put('/:userID', updateContacts)
contactRouter.delete('/:userID', deleteContacts)

module.exports = contactRouter
