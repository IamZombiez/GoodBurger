var express = require("express");
var router = express.Router();

var burgerData = require("../models/burger.js");

router.get('/', function(req, res){
	burgerData.selectAll(function(data){
		var hbsObject = {
			burger: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});


module.exports = router;