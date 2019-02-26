var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
/* GET home page. */
router.get('/list', function(req, res, next) {
  res.send(Mock.mock({
    'list|4':[{
      title:'@ctitle',
      time:new Date()*1
    }]
  }));
});

module.exports = router;
