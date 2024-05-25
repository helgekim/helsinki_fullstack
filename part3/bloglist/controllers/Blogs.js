const Blogs = require('express').Router();
const mongoose = require('mongoose');
const Blog  = require('../models/Blog');
const {info, error} = require('../utils/logger');


const User = require('../models/User');

/*
console.log("Router initialised")
console.log(typeof Blog, {...Blog})
*/ 

Blogs.get('/', async (request, response) => {
	// console.log("We are processing a request on /api/blogs/")
	//response.status(300).json({"message":"no data yet"}).end()


	const blogs = await Blog.find({}).populate('author')
	// remove all the unnecessary fields!
	

	response.json(blogs).end()
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
