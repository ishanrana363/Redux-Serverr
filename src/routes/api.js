const express = require('express');
const { createUser, allUsers }  = require("../contollers/userController")

const router = express.Router();

router.post("/create-user", createUser )
router.get("/all-user", allUsers )


module.exports = router