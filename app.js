const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const dbPort = process.env.DB_URL;

app.use(express.json());
app.use(cors());


mongoose.connect(dbPort).then((res) => {
    console.log(`--Database connect--`)
}).catch((error) => {
    console.log(`--Database connection failed-- ${error}`)
});


const router = require("./src/routes/api")


app.use("/api/v1",router);


module.exports = app;