var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zikki Project progress Tracker', pStatus :'STALLED' });
});



var database = {
	host : "localhost",
	username : "root",
	password : "root",
	database : "zikkidb"
}

module.exports = router;
