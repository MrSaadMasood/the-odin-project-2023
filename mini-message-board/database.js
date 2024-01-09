const { MongoClient} = require('mongodb')

let connection;
const url = "mongodb+srv://myAtlasDBUser:test@myatlasclusteredu.h2zv3ri.mongodb.net/?retryWrites=true&w=majority"
module.exports = {
    connectData : (callback)=>{
        MongoClient.connect(url)
        .then((result)=>{
            connection = result.db("mini-messages")
            console.log("connection successful");
            return callback()
        })
        .catch((error)=>{
           console.log(error) 
            return callback(error)
        }) 
    },

    getData : ()=> connection
}