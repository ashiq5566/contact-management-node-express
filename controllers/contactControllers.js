const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
//@desc Get all contact
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find();
    res.json(contacts)
});

//@desc Get contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    res.json(contact)
});

//@desc Create contact
//@route POST /api/contacts
//@access public
const CreateContact = asyncHandler(async (req,res) => {
    const {name, email, phone} = req.body;
    if (!name || !email|| !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact)
});
  
//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(updatedContact)
});

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    console.log("helo", contact)
    await Contact.deleteOne({ _id: req.params.id });
    res.json(contact);
});
// const deleteContact = asyncHandler(async (req, res) => {
//     try {
//         const contact = await Contact.findById(req.params.id);
//         if (!contact) {
//             res.status(404);
//             throw new Error("Contact not found");
//         }
//         console.log("Deleting contact:", contact);
//         await Contact.deleteOne({ _id: req.params.id });
//         res.json({ message: "Contact deleted successfully" });
//     } catch (error) {
//         console.error("Error deleting contact:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

module.exports = {getContacts, getContact, CreateContact, updateContact, deleteContact};