//@desc Get All Contact
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({message: "Getting all contact"})
};

//@desc Create Contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("Request Body is: ", req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fileds are required!")
    }
    res.status(201).json({message: "Create new contact"})
};

//@desc delete Contact
//@route DELETE /api/contacts:id
//@access public
const deleteContact = (req, res)=> {
    res.status(200).json({message: `Delete contact with ${req.params.id}`})
};

//@desc Update Contact
//@route PUT /api/contacts:id
//@access public
const updateContact = (req,res) => {
    res.status(200).json({message: `Update contact with ${req.params.id}`})
};

//@desc Get Single Contact
//@route GET /api/contacts:id
//@access public
const getSingleContact = (req, res) => {
    res.status(200).json({message: `Get contact with ${req.params.id}`})
};

module.exports = {getContact, createContact, deleteContact, updateContact, getSingleContact}