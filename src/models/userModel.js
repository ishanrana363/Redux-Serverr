const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    
    name: {
        type: String,
        
    },
    email: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    city: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
    versionKey: false,
})



const userModel = model("users", userSchema);


module.exports = userModel;