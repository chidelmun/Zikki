var express = require('express');
var router = express.Router();
// var firebase = require('firebase').initializeApp({
// 	serviceAccount : './chidelmun-b0506da02bdd.json',
// 	databaseURL : 'https://quak-cc7dd.firebaseio.com/'
// });

// var ref = firebase.database().ref("zikki/projects");

/* GET home page. */
router.get('/', function(req, res, next) {
	// var status = null;
	// ref.on('value', function(snapshot) {
 //    snapshot.forEach(function(childSnapshot) {
 //      var childData = childSnapshot.val();
 //      if (childData.project_Id === "22") {
 //      	console.log(childData.Status);
 //      	status = childData.Status;
 //      }
      
 //    });
	// });
	// console.log(database.host + "/" + database.database);
  res.render('index', { title: 'Zikki Project progress Tracker', pStatus :'STALLED' });
});



var database = {
	host : "localhost",
	username : "root",
	password : "root",
	database : "zikkidb"
}

module.exports = router;
