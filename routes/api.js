var express = require('express');
var router = express.Router();
var firebase = require('firebase').initializeApp({
	serviceAccount : './chidelmun-b0506da02bdd.json',
	databaseURL : 'https://quak-cc7dd.firebaseio.com/'
});
var ref = firebase.database().ref("zikki/projects");

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("API called");
  res.json({name:'api', path:'http://localhost'});
});

router.post('/project/add', function(req,res,next){
		var title = req.body.title;
		var sdate = req.body.sdate;
		var ddate = req.body.ddate;
		var status = req.body.status;
		var project = {project_Id:title,Start_date:sdate, Due_date : ddate, Status : status};

		ref.push(project);
		res.render('project', {title:title});
		
});

module.exports = router;
