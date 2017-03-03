// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/chat',function(err ,db) {
// 	// console.error(err);
// 	console.log('open DB');

// 	//mongoではテーブルではなくコレクション
// 	var collection = db.collection('user');

// 	collection.find().forEach(function(elem){
// 		// console.log(elem.user_id);	//データ読み

// 	});

// 	//データ書き
// 	// var value = ({user_id: "aaa", status: "logout"});
// 	// collection.insertOne(value, function(err,r){
// 	// 	console.log("追加作業");
// 	// });

// 	collection.find().forEach(function(elem){
// 		console.log(elem.user_id);

// 	});

// 	//データ上書き	oneは一つだけ Manyは複数
// 	collection.updateMany(
// 		{user_id: "aaa"},
// 		{$set: {user_id: "bbb"}},
// 		function(err, r){
// 			console.log("修正作業");
// 		}
// 	);

// 	//データ削除　アップデートと同じでわんとめにー
// 	collection.deleteMany(
// 		{user_id: "TEST"},
// 		function(err, r){
// 			console.log("削除");
// 		}
// 	);


// 	db.on('clause', function(){
// 		console.log('clause DB');
// 	})
// 	db.close();
// });










