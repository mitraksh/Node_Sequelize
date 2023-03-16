const { StatusCodes } = require('http-status-codes')
const {
  addContact,
  getContactById: getContactByIdService,
  getContact: getContactService,
} = require('../service/contact')
const { Contact, contact } = require('../../../view/contact')
const {user} = require('../../../view/user')

const createContact = async (req, res, next) => {
  try {
    const { name } = req.body
    const userid = req.params.userID
    // for(let c=1;c<user.length;c++){
    //   if(user[c].id != userid){
    //     console.log("User ID not found, please try again.");
    //     res.send("User ID not found, please try again.")
    //     return ;
    //   }
    // }
    const contact = new Contact(userid, name)
    const contactData = await addContact(contact)
    
    res.status(StatusCodes.CREATED).json(contactData)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const getContactById = async (req, res, next) => {
  try {
    const userid = req.params.userID
    // for(let c=1;c<user.length;c++){
    //   if(user[c].id != userid){
    //     console.log("User ID not found, please try again.");
    //     res.send("User ID not found, please try again.")
    //     return ;
    //   }
    // }
    const contactData = await getContactByIdService(req.params.userID)
    res.status(StatusCodes.OK).json(contactData)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const getContact = async (req, res, next) => {
  try {
    const contactData = await getContactService()
    res.status(StatusCodes.OK).json(contactData)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

module.exports = {
  createContact,
  getContactById,
  getContact,
}