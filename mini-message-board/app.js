const express = require('express')
const app = express()
const { connectData, getData }= require('./database')
const indexRouter = require("./routes/index")
const newRouter = require("./routes/new")
const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.set("view engine", "ejs")
const PORT = process.env.PORT || 3000

connectData((error)=>{
    if (error) console.log("some error occured", error);
    app.listen(PORT, ()=>{
    console.log("the server is running at port", PORT);
    })
})

app.get("/", indexRouter)

app.get('/new', indexRouter)

app.post("/new", indexRouter) 


