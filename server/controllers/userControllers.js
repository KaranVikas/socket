// to handle
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

// logic part for user
const registerUser = asyncHandler(async (req, res) => {
  // destructuring
  const { name, email, password, pic } = req.body;
  // check if undefined
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields");
  }

  const userExists = await User.findOne({ email });
  // if user exists
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  // create new user
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});


// wrap the function in asyncHandler 
const authUser = asyncHandler(async (req, res) => {
    
    const {email, password} = req.body;
    // find user if exist 
    const user = await User.findOne({email});
    // if exist + password entered is in database
    if(user && (await user.matchPassword(password))){
        // res.json send a json response (with correct content-type)
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    }else {
        res.status(401);
        throw new Error("Invalid Email or password");
    }
});

module.exports = { registerUser, authUser };
