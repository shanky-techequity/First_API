// const MongoClient  = require('mongodb').MongoClient;
const {MongoClient,ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/testTodoApp',(err,db) => {
	if(err){
		return console.log('unable to connect to Mongodb Server');
	}
	console.log('Connect to Mongodb Server');


	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('599d5a9f84dc270988e1acb0')
	// },{
	// 	$set: {
	// 		completed :true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('599d5a9f84dc270988e1acb0')
	},{
		$set: {
			text :'gupta'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});


	// db.close();
});