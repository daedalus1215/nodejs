var express = require('express');
var router = express.Router();

/* GET /users page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router; // this allows us to access this file from a different file.
