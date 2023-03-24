const { default: mongoose } = require("mongoose");

const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        require:true,
        default:Date.now()
    }
})