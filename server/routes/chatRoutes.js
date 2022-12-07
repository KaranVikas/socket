const express = require('express')

const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

// for accessing and create the chats
// router.route("/").post(protect, accessChat);

//  get all the chats from the user
router.route("/").get(protect, fetchchats);

// for creation of the group
router.route("/group").post(protect, createGroupChat);
//to rename group
router.route("/rename").put(protect, renameGroup);

router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;