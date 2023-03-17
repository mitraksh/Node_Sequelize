const express = require('express')
const {
  createContactInfo,
  getContactInfoById,
  getContactInfo,
  updateContactInfos,
  deleteContactInfos
} = require('./controller/contactInfo.js')

const contactRouter = express.Router()

contactRouter.post('/:contactid', createContactInfo)
contactRouter.get('/', getContactInfo)
contactRouter.get('/:contactid', getContactInfoById)
contactRouter.put('/:contactid', updateContactInfos)
contactRouter.delete('/:contactid', deleteContactInfos)

module.exports = contactRouter
