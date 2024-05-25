const database = require('mongoose');

const db_schema = new database.Schema(
{
title: {
	type: String,
	required: true},
author: {
	type: database.Schema.Types.ObjectId,
	required: true,
	ref: "User"
	},
url: {
	type: String,
	required: true},
likes: Number
}
);

const Blog = database.model('Blog', db_schema);

module.exports = Blog

