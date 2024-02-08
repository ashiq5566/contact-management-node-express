const mongoose = require("mongoose");

const contacSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter name"]
    },
    email : {
        type : String,
        required : [true, "Please enter email address"]
    },
    phone : {
        type : String,
        required : [true, "Please enter contact number"]
    }
},{
    timestamps : true,
});


module.exports = mongoose.model("Contact", contacSchema)