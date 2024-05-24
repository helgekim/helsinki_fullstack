const database = require('mongoose');

const db_schema = new database.Schema({username: {
	type: String,
	min: 4,
	required: true},
passwordHash: {
	type: String,
	required: true
}})

const User = database.model('User', db_schema);

module.exports = User;
