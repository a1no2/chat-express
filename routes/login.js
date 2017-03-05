var express = require('express');
var router = express.Router();

// require('../js/mongo');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('login', { title: 'login'});
});

var MongoClient = require('mongodb').MongoClient;
var collection;


// セッション関連
router.post('/', function(req, res, next) {
	if (req.body.newUser == "新規登録") {
		MongoClient.connect('mongodb://localhost:27017/login',function(err ,db) {
			// console.error(err);
			console.log('open DB');
			collection = db.collection('user');
			// collection.createIndex({username: 1}, {unique: true});

			var value = ({userName: req.body.userName  ,pass: req.body.pass});
			
			//ユニークなユーザー名か判定
			var registrationFlag = true;
			collection.find().forEach(function(elem){
			// collection.find().some(function(elem){
				console.log(elem);
				//かぶったら登録しない
				// if (elem.userName == value.userName) {
				// 	console.log("かぶり");
				// 	RegistrationFlag = false;
				// }
				// console.log(registrationFlag);

			});


			// var hoge = collection.find({userName: req.body.userName});
			// console.log(hoge.);

			//ユーザー名が、かぶっていなければ(登録フラグがたっていれば)DBに追加
			// if (registrationFlag) {
				collection.insertOne(value, function(err,r){
					console.log("data追加:" + value.userName);
					//登録されたらセッションでユーザー名を渡す
					// req.session.user = {name: value.userName};
				});
			// 	// res.render('chat', {user: req.body.userName});
			// } else {
			// 	res.render('login', {title: "login", error: "そのユーザー名は使えません。"});
			// }
			//  else {
			// 	console.log();
			// }


			// collection.drop();



			//DBとじ
			// db.on('clause', function(){
			// 	console.log('clause DB');
			// })
			db.close();

		});



		// req.session.user = {login: 'true'};

	} else if (req.body.login == "ログイン") {

		MongoClient.connect('mongodb://localhost:27017/login',function(err ,db) {
			collection = db.collection('user');
			console.log('open DB');
			// var user = collection.find({userName: req.body.userName, pass: req.body.pass});
			// var user = collection.find();
			// var user = collection.find({userName: req.body.userName});
			// var naoki = db.user.find({userName: 'なおき'});
			// console.log(req.body.userName);
			// console.log(naoki + "");
			
			// console.log(collection.find({'userName': req.body.userName}));
			// console.log(collection.find({"userName": req.body.userName},{"pass":true}));
			// console.log(collection.find({"userName": req.body.userName},{}));
			

			

			// collection.find().forEach(function(elem){
			// 	console.log(elem);
			// });
			

			collection.find().forEach(function(elem){
				console.log(elem);
			});

			// collection.remove();

			//閉じる
			db.on('clause', function(){
				console.log('clause DB');
			})
			db.close();
		});




	}
	// console.log(req);
	// console.log(req.body.newUser);
	// console.log(req.session.user);
	// console.log(req.session.user.name);
	// console.log(req.session.user[name]);


	// if(req.body.userName) {
	// req.session.user = {name: req.body.userName};
	// req.session.pass = {name: req.body.pass};
	// res.redirect('./chat');
	// } else {
	// var err = '入力が正しくありません。確認して再入力してください。';
	// res.render('login', {error: err});
	// }

});



module.exports = router;