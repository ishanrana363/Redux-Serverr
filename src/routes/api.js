const express = require('express');
const { createUser, allUsers, singleUser, deleteUser }  = require("../contollers/userController");

const router = express.Router();

router.post("/create-user", createUser );
router.get("/all-user", allUsers );
router.get("/single-user/:id", singleUser );
router.delete("/delete-user/:id", deleteUser );


module.exports = router;