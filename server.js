var express = require('express');
var app = express();
var cors = require('cors')
let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");
const { application } = require('express');

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extends: false}));
app.use(cors())
app.use('/api/projects',projectRoutes)


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


var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App is listening to http://localhost:"+port);
    //createCollection("stars")
});