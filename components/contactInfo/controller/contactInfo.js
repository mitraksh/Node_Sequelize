const { StatusCodes } = require('http-status-codes')
const {
  addContactInfo,
  getContactInfoById: getContactInfoByIdService,
  getContactInfo: getContactInfoService,
  updateContactInfos:updateContactInfoService,
  deleteContactInfos:deleteContactInfoService,
} = require('../service/contactInfo')
const { ContactInfo, contactInfo } = require('../../../view/contactInfo')
const {contact} = require('../../../view/contact')
const {user} = require('./../../../view/user')

const createContactInfo = async (req, res, next) => {
  try {
    const { type,number } = req.body
    const contactid = req.params.contactid
    // for(let c=1;c<contact.length;c++){
    //   if(contact[c].id != contactid){
    //     console.log("Contact ID not found, please try again.");
    //     res.send("Contact ID not found, please try again.")
    //     return ;
    //   }
    // }
    const contactInfo = new ContactInfo(contactid,type,number)
    const contactInfoData = await addContactInfo(contactInfo)
    
    res.status(StatusCodes.CREATED).json(contactInfoData)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const getContactInfoById = async (req, res, next) => {
  try {
    const contactid = req.params.contactid
    // for(let c=1;c<contact.length;c++){
    //   if(contact[c].id != contactid){
    //     console.log("Contact ID not found, please try again.");
    //     res.send("Contact ID not found, please try again.")
    //     return ;
    //   }
    // }
    const contactInfoData = await getContactInfoByIdService(req.params.contactid)
    res.status(StatusCodes.OK).json(contactInfoData)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const getContactInfo = async (req, res, next) => {
  try {
    const contactInfoData = await getContactInfoService()
    res.status(StatusCodes.OK).json(contactInfoData)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const updateContactInfos = async (req,res,next) => {
  const { type,number } = req.body
  const contactID = req.params.contactid
  const contactinfo = new ContactInfo(contactID,type,number)
  const contactInfoData = await updateContactInfoService(contactinfo,contactID)
  res.status(StatusCodes.OK).json(contactInfoData)
}

const deleteContactInfos = async (req,res,next) => {
  const contactID = req.params.contactid
  // console.log(userID)
  const contactInfoData = await deleteContactInfoService(contactID)
  res.status(StatusCodes.OK).json(contactInfoData)
}

module.exports = {
  createContactInfo,
  getContactInfoById,
  getContactInfo,
  updateContactInfos,
  deleteContactInfos,
}