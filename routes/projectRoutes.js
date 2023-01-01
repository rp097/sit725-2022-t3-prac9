var express = require("express")
var router = express.Router();
let client = require("../dbConnect");
let projectCollection;
let controller = require("../controller");



router.post('/',(req,res) => {
    controller.projectController.createProjects(req,res)
})



router.get('/',(req,res) => {
    controller.projectController.retrieveProjects(req,res)
})


module.exports = router;