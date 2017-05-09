var express = require('express');
var router = express.Router();

// index page
router.get('/', function (req, res, next) {
  res.render('index.html');
});

// export router
module.exports = router;
