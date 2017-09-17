var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('project', { title: 'Zikki Project progress Tracker' });
});

router.get('/add', function(req,res,next){
	res.render('add', {title:'Add new Project'});
});

module.exports = router;
