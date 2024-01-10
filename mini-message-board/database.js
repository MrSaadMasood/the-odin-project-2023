const { MongoClient} = require('mongodb')

let connection;
const mongoURL = process.env.MONGO_URL
module.exports = {
    connectData : (callback)=>{
        MongoClient.connect(mongoURL)
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