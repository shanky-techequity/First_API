const MongoClient  = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/testTodoApp',(err,db) => {
	if(err){
		return console.log('unable to connect to Mongodb Server');
	}
	console.log('Connect to Mongodb Server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });


	db.collection('Users').insertOne({
		name: 'Shashank',
		age: 25,
		location: 'Gurugram'
	}, (err, result) => {
		if(err) {
			return console.log('Unable to insert todo',err);
		}
		console.log(result.ops);
	});

	db.close();
})