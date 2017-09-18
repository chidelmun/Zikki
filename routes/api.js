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
		var title = req.body.ptitle;
		var sdate = req.body.sdate;
		var ddate = req.body.ddate;
		var status = req.body.pstatus;
		var project = {project_Id:title,Start_date:sdate, Due_date : ddate, Status : status};
		console.log(project);
		ref.push(project);
		res.redirect('/');
		
		
});

router.post('/project/', function(req,res,next){
		console.log(req.body.proId);
		ref.on('value', function(snapshot) {
	    snapshot.forEach(function(childSnapshot) {
	      var childData = childSnapshot.val();
	      if (childData.project_Id === req.body.proId) {
	      	console.log(childData.Status);
	      	res.render('project', {title:'Project Info', started_on : childData.Start_date, due_on : childData.Due_date, current_state : childData.Status});
	      }else{
	      	console.log(req.body.proId);
	      	// res.render('notfound', {title:'No such project', started_on : 'N/A', due_on : 'N/A', current_state : 'UNKNOWN'});
	      }
	      
	    });
	});

		
		
});
module.exports = router;
