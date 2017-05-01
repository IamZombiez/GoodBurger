const express = require("express")
const override = require("method-override")
const bodyParser = require("body-parser")

var app = express();

var PORT = process.env.PORT || 8080;
 
 // data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);


app.listen(PORT, function (){
	console.log("App on " + PORT);
});
