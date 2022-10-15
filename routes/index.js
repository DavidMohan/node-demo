var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    stdname: 'Mohan',
    stddept: 'Master of Computer Applications',
    stdclg: 'Ayya Nadar Janakai Ammal College, Sivakasi',
    eventName: 'Web Designing',
    startTime: '10.00 AM',
    endTime: '12.00 PM',
    meal: "Non-Veg"
   });
});

module.exports = router;
