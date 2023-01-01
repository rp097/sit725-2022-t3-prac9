require('dotenv').config()
const MongoClient = require('mongoDb').MongoClient;

const uri = 'mongodb+srv://rp097:rp123@cluster0.5aeffbr.mongodb.net/?retryWrites=true&w=majority'
const client =  new MongoClient(uri,{ useNewUrlParser: true })


client.connect((err,db) => {
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })

    module.exports = client;