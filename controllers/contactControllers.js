//@desc Get all contact
//@route GET /api/contacts
//@access public
const getContacts = (req,res) => {
    res.json({message: "Get all contacts"})
};

//@desc Get contact
//@route GET /api/contacts
//@access public
const getContact = (req,res) => {
    res.json({message: "Get contact"})
};

//@desc Create contact
//@route POST /api/contacts
//@access public
const CreateContact = (req,res) => {
    console.log("request body is", req.body)
    const {name, email, phone} = req.body;
    if (!name || !email|| !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.json({message: "Create contact"})
};
  
//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res) => {
    res.json({message: `Update contact ${req.params.id}`})
}

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req,res) => {
    res.json({message: `Delete contact ${req.params.id}`})
}

module.exports = {getContacts, getContact, CreateContact, updateContact, deleteContact};