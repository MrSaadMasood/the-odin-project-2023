const express = require('express')
const router = express.Router()
const { connectData, getData }= require("../database")
let db;

connectData(error =>{
    if (error) console.log("some error occured");
    db = getData()
})

let allMessages = [] 
router.get('/', (req, res)=>{
    db.collection('app').find().forEach(element => {
        allMessages.push(element)
    })
    .then(()=> {
        res.render('index', {messages : allMessages})
    })
})


router.get("/new", (req, res)=>{
    res.render("form")
})

router.post("/new", (req, res)=>{
    allMessages = []
    db.collection("app").insertOne({
        text : req.body.message,
        user : req.body.usernameInput,
        added : new Date()
 
    })
   
    res.redirect('/')
})

module.exports = router