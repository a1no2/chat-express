var express = require('express');
var router = express.Router();

// require('../js/mongo');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('login', { title: 'login' });
});

var MongoClient = require('mongodb').MongoClient;
var collection;


// セッション関連
router.post('/', function(req, res, next) {
	if (req.body.newUser == "新規登録") {
		MongoClient.connect('mongodb://localhost:27017/chat',function(err ,db) {
			// console.error(err);
			console.log('open DB');

			//mongoではテーブルではなくコレクション
			collection = db.collection('user');

			// 追加
			var value = ({userName: req.body.userName  ,pass: req.body.pass});
			collection.insertOne(value, function(err,r){
				console.log("追加作業");
			});
			
			// collection.remove();

			collection.find().forEach(function(elem){
				console.log(elem);

			});

			//DBとじ
			db.on('clause', function(){
				console.log('clause DB');
			})
			db.close();

		});



		// req.session.user = {login: 'true'};

	} else if (req.body.login == "ログイン") {

		MongoClient.connect('mongodb://localhost:27017/chat',function(err ,db) {
			collection = db.collection('user');
			// var user = collection.find({userName: req.body.userName, pass: req.body.pass});
			// var user = collection.find();
			// var user = collection.find({userName: req.body.userName});
			// var naoki = db.user.find({userName: 'なおき'});
			// console.log(req.body.userName);
			// console.log(naoki + "");
			
			console.log(collection.find({"userName": req.body.userName},{"pass":true}));
			// console.log(collection.find({"userName": req.body.userName},{}));
			

			//データ削除　アップデートと同じでわんとめにー
			// collection.find(
			// 	{userName: req.body.userName, pass: req.body.pass},
			// 	function(err, r){
			// 		console.log(r + "\n\n");
			// 		console.log("err: " + err);
			// 	}
			// );
			
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