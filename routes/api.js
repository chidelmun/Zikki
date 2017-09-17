var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("API called");
  res.json({name:'api', path:'http://localhost'});
});

module.exports = router;
