var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.get('/:user', function(req, res, next) {
//   res.render('chat', {title: req.prams.user});
// });

module.exports = router;




// 以下のコード追加
exports.login = function(req, res){
  res.render("login",{title:"login"});
};