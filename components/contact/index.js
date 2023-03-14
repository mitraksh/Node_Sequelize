const express = require('express')
const {
  createContact,
  getContactById,
  getContact,
} = require('./controller/contact.js')

const contactRouter = express.Router()

contactRouter.post('/:userID', createContact)
contactRouter.get('/', getContact)
contactRouter.get('/:userID', getContactById)

module.exports = contactRouter
