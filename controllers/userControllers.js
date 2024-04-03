const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async  (req, res) => {
    // const {name, username, phone, email, password} = req.body;
    // if (!username || !email || !phone || !name || !password){
    //     res.status(400);
    //     throw new Error ("All fields are mandatory");
    // }
    // const userAvailable = await User.findOne({email});
    // if (userAvailable){
    //     res.status(400);
    //     throw new Error ("User already exist ");
    // }

    // //Hash password
    // const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("Hashed Password: ", hashedPassword);
    // const user = await User.create({
    //     username,
    //     email,
    //     password: hashedPassword,
    // });

    // console.log(`User created ${user}`);
    // if (user) {
    //     console.log("=========");
    //     res.status(201).json({ _id: user.id, email: user.email });
    // } else {
    //     res.status(400);
    //     throw new Error("User data is not valid");
    // }
    // res.json({ message: "Register the user" });

    const { name, username, email, phone, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);

    try {
        const user = await User.create({
            name,
            username,
            email,
            password: hashedPassword,
            phone

        });
        console.log(`User created ${user}`);
    } catch (error) {
        console.log(error);
    }
    

    // console.log(`User created ${user}`);
    // if (user) {
    //     res.status(201).json({ _id: user.id, email: user.email });
    // } else {
    //     res.status(400);
    //     throw new Error("User data is not valid");
    // }
    res.json({ message: "Register the user" });
    
});


//@desc login a user
//@route POST /api/users/login
//@access private 
const loginUser = asyncHandler(async  (req, res) => {
    res.json({message : "Logged in successfully"})
});


//@desc get information about current user
//@route POST /api/users/current-user
//@access private 
const currentUser = asyncHandler(async  (req, res) => {
    res.json({message : "Successfully recieved"})
});


module.exports = { registerUser, loginUser, currentUser};