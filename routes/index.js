var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(database.host + "/" + database.database);
  res.render('index', { title: 'Zikki Project progress Tracker' });
});



var database = {
	host : "localhost",
	username : "root",
	password : "root",
	database : "zikkidb"
}

module.exports = router;
