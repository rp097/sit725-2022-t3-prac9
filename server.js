var express = require('express');
var app = express();
var cors = require('cors')

const MongoClient = require('mongoDb').MongoClient;

const uri = 'mongodb+srv://rp097:rp123@cluster0.5aeffbr.mongodb.net/?retryWrites=true&w=majority'
const client =  new MongoClient(uri,{ useNewUrlParser: true })

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extends: false}));
app.use(cors())

const createCollection = (collectionName) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}

app.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {

            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
})

const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}

/* const cardList = [
    {
        title: "The Red Giant Star",
        image: "images/red giant.png",
        link: "About Red Giant Star",
        description: "When a star runs of hydrogen fuel in its core, it has to adjust and find alternate ways to power itself - one of the ways it does this is to start burning hydrogen outside the core and this makes the star swell up. The result is a cool, puffy red giant star. "
    },
    {
        title: "The White Dwarf Star",
        image: "images/White_Dwarf.png",
        link: "About White Dwarf Star",
        description: "When a star about the size of our Sun, or a little larger, has burnt all the material it can, it collapses into a new type of object - a kind of giant crystal supported by the wonders of quantum physics (specifically the degeneracy pressure of electrons) rather than its own heat. "
    }
] */

app.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App is listening to http://localhost:"+port);
    createCollection("stars")
});