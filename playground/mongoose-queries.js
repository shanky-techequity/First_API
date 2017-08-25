const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


var id = '59a015812291a7f8218b80dc';


if(!ObjectID.isValid(id)){
	console.log('ID');
}

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todos) =>{
// 	console.log('Todos',todos);
// });


Todo.findById(id).then((todo) => {
	if(!todo){
		return console.log('id not found');
	}
	console.log('Todo By Id',todo);
}).catch((e) => console.log(e));