const express = require('express');
const router = express.Router();
const {getContacts, getContact, CreateContact, updateContact, deleteContact} = require("../controllers/contactControllers");

router.route("/").get(getContacts);

router.route("/:id").get(getContact);

router.route("/").post(CreateContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router; 