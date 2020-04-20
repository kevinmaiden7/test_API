var express = require('express');
var router = express.Router();
var path = require('path');
var pkg = require(path.join(__dirname, '../package.json'));

/* GET users listing. */
router.get('/info', function(req, res, next) {
  //res.render('text', { text: 'Getting a resource: JSON file' });
  console.log("Accessing /info path");
  res.json({
    name: pkg.name,
    version: pkg.version,
    status: 'up'
  });
});

module.exports = router;