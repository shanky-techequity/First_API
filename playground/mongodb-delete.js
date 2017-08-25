const MongoClient  = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/testTodoApp',(err,db) => {
	if(err){
		return console.log('unable to connect to Mongodb Server');
	}
	console.log('Connect to Mongodb Server');


	// deleteMany
	// db.collection('Todos').deleteMany({text: 'gupta'}).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	db.collection('Todos').deleteOne({text: 'gupta'}).then((result) => {
		console.log(result);
	});

	// findOneAndDelete
	db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
		console.log(result);
	});

	// db.close();
});