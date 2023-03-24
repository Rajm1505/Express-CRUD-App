require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')
const PORT =process.env.PORT || 1234

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true})
const db = mongoose.connection


db.on('error',(error)=>{
    console.log('error');
})
db.on('open',()=>{
    console.log('connected');
})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//session
app.use(session({
    secret : "mysecret",
    saveUninitialized: true,
    resave : false
}))

//message
app.use((req,res,next)=>{
    res.locals.message=req.session.message
    delete req.session.message
    next()
})

app.set("view engine","ejs")

app.use("",require("./routes/route"))



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})