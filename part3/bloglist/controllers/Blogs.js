const Blogs = require('express').Router();
const mongoose = require('mongoose');
const Blog  = require('../models/Blog');
const {info, error} = require('../utils/logger');

/*
console.log("Router initialised")
console.log(typeof Blog, {...Blog})
*/ 

Blogs.get('/', (request, response) => {
	// console.log("We are processing a request on /api/blogs/")
	//response.status(300).json({"message":"no data yet"}).end()
	Blog.find({}).then(
	information => response.json(information)
	).catch(
	data => error(data)
	)
})

Blogs.post('/', (request, response) => {
	console.log(request.body);
	if (request.body) {
	const newBlog = new Blog({...request.body})
	newBlog.save().then(resource => response.status(301).json(resource).end()).catch(data => {error(data); response.status(300).json({"error": `${data}`}).end()})
	} else {
	 response.status(300).end();
	}
})

module.exports = Blogs;
