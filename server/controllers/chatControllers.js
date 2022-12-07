const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

const accessChat = asyncHandler(async(req, res) => {
    // check chat exist with userid exist return it if not create it
    const {userId } = req.body;
    
    if(!userId) {
        console.log("UserId param not sent with request");
        return res.sendStatus(400);
    }

    var isChat = await Chat.find({
        isGroupChat:false,
        $and: [
            {users:{$elemMatch: {$eq:req.user._id }}},
            {users: {$elemMatch: {$eq: userId}}}
        ]
    })
        .populate("users","-password")
            .populate("latestMessage");

        //populate sender field
        isChat = await User.populate(isChat,{
            path:'latestMessage.sender',
            select: "name pic email"
        })   
});