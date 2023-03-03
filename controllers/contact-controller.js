const asyncHandler = require('express-async-handler')
const Contact = require("../models/contact-model")
//@desc Get All Contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
});

//@desc Create Contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("Request Body is: ", req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fileds are required!")
    }
    const contacts = await Contact.create({
        name,
        email,
        phone
    });
    console.log(contacts)
    res.status(201).json(contacts);
});

//@desc delete Contact
//@route DELETE /api/contacts:id
//@access public
const deleteContact = asyncHandler(async (req, res)=> {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact does not exist!")
    }
    Contact.findByIdAndDelete(req.params.id)
    res.status(200).json(contact)
});

//@desc Update Contact
//@route PUT /api/contacts:id
//@access public
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update contact with ${req.params.id}`})
});

//@desc Get Single Contact
//@route GET /api/contacts:id
//@access public
const getSingleContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(400)
        throw new Error("Contact Not Found");
    }
    res.status(200).json(contact)
});

module.exports = {getContact, createContact, deleteContact, updateContact, getSingleContact}