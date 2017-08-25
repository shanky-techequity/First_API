const MongoClient  = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/testTodoApp',(err,db) => {
	if(err){
		return console.log('unable to connect to Mongodb Server');
	}
	console.log('Connect to Mongodb Server');

	db.collection('Todos').find({text: 'shashank'}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err) => {
		console.log('Unable to fetch todos',err);
	});


	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err) => {
	// 	console.log('Unable to fetch todos',err);
	// });


	// db.close();
});