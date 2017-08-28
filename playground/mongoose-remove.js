const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user'); 

Todo.remove({}).then((result) => {
	console.log(result);
})

Todo.findOneAndRemove
Todo.findByIdAndRemove


Todo.findByIdAndRemove('59a3eda01e260ba6864a841f').then((todo) => {
	console.log(todo);
})