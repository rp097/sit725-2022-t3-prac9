let client = require("../dbConnect")
let projectCollection;

setTimeout(() => {
    projectCollection = client.db().collection("stars");
    //projectCollection = client.db().collection("stars"); //.db.collection("Project")
},2000)

//INSERT PROJECTS
const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}

//GET PROJECTS
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

module.exports = {insertProjects, getProjects}