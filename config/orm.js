var connection = require("../config/connection.js");

var orm = {

	selectAll: function(tableInput, cb){
		var queryString = "SELECT ?? FROM ??";
		connection.query(queryString, function(err, result){
			if(err) {
				throw err
			}
			cb(result)
		});
	},

	update: function(table, objColVals, condition, cb) {
    	var queryString = "UPDATE " + table;
    	queryString += " SET ";
    	queryString += objToSql(objColVals);
    	queryString += " WHERE ";
    	queryString += condition;
    	console.log(queryString);
    	connection.query(queryString, function(err, result) {
    		if(err){
    			throw err;
    		}
    	})
      	cb(result);
    },
  

};

module.exports = orm;

// selectAll() // where eaten = false || true
// insertOne() // adding a burger
// updateOne() // 