var orm = require("../config/orm.js")

var burgerData = {

	selectAll: function(cb) {
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	}
}

module.exports = burgerData;