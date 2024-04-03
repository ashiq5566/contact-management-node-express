const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter name"]
    },
    email : {
        type : String,
        required : [true, "Please enter email address"],
        unique : [true, "email already taken"]
    },
    phone : {
        type : String,
        required : [true, "Please enter contact number"]
    },
    username : {
        type : String,
        required : [true, "Please enter username"]
    },
    password : {
        type : String,
        required : [true, "Please enter password"]
    },
},{
    timestamps : true,
});


module.exports = mongoose.model("User", userSchema)