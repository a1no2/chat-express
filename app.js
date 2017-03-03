var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var session = require('express-session'); // 追加

//ページ
var index = require('./routes/index');
var users = require('./routes/users');
var chat = require('./routes/chat');
var login = require('./routes/login');  // 追加







var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// 追加 
// セッションの設定のようなもの
app.use(session({
  secret: 'name',				//必須
  resave: false,				//変更がない場合の保存するか
  saveUninitialized: false,		//新規セッション生成の時、デフォで何か入れるか？
  rolling: true,				//アクセスのたびに有効期限伸ばす
  cookie: {
    maxAge: 30 * 60 * 1000		//30分(ミリ秒)
  }
}));

//セッションチェック
var sessionCheck = function(req, res, next) {
  // if (document.loginForm.value == "登録") {
  //   console.log("new");
  // } else {
  //   console.log("login");
  // }
  // if (req.session.user) {     //user見に行って・・・
  //   next();
  // } else {
  //   res.redirect('/login');   //なかったらログインページに戻す
  // }
};





//ここまで





app.use('/login', login);  // 追加
app.use('/', sessionCheck, login);  // sessionCheckを前処理に追加
// app.use('/index', index);
app.use('/users', users);
app.use('/chat', chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
