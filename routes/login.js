var express = require('express');
var router = express.Router();

// require('../js/mongo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});

module.exports = router;


// セッション関連
router.post('/', function(req, res, next) {


  if (req.body.newUser == "新規登録") {
    req.session.user = {name: req.body.userName, pass: req.body.pass, login: true};
  } else if (req.body.newUser == "ログイン") {

  }
    // console.log(req);
    console.log(req.body.newUser);
    console.log(req.session.user);
    // console.log(req.session.user[name]);

  
  // if(req.body.userName) {
  //   req.session.user = {name: req.body.userName};
  //   req.session.pass = {name: req.body.pass};
  //   res.redirect('./chat');
  // } else {
  //   var err = '入力が正しくありません。確認して再入力してください。';
  //   res.render('login', {error: err});
  // }
  
});


