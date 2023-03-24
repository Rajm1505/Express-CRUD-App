const express = require('express');
const multer = require('multer');
const route = express.Router()

route.get("/",(req,res)=>{
    res.render("index",{title:"Home"})
})

route.get("/adduser",(req,res)=>{
    res.render("add_user",{title:"Add User"})
})

const upload = multer.diskStorage({
    destination : function(req,res,file){

    },
    filename : {
        
    }
})

route.post("/adduser",upload,(req,res)=>{
    res.render("add_user",{title:"Add User"})
})

module.exports = route