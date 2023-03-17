const express = require('express')
const {
  createContactInfo,
  getContactInfoById,
  getContactInfo,
} = require('./controller/contactInfo.js')

const contactRouter = express.Router()

contactRouter.post('/:contactid', createContactInfo)
contactRouter.get('/', getContactInfo)
contactRouter.get('/:contactid', getContactInfoById)

module.exports = contactRouter
