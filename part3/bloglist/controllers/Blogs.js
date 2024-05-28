const Blogs = require('express').Router();
const mongoose = require('mongoose');
const Blog  = require('../models/Blog');
const {info, error} = require('../utils/logger');

const User = require('../models/User');

/*
console.log("Router initialised")
console.log(typeof Blog, {...Blog})
*/ 

const jwt = require("jsonwebtoken");

Blogs.get('/', async (request, response) => {
	// console.log("We are processing a request on /api/blogs/")
	//response.status(300).json({"message":"no data yet"}).end()


	const blogs = await Blog.find({}).populate('author', '-__v -passwordHash')
/*
	const newblogs = blogs.map(blog => {return {author:
	console.log(blogs)
	console.log(newblogs)

	console.log("Blog request incoming")
*/
	response.json(blogs).end()
})

Blogs.post('/', (request, response) => {
	const authorization_header = request.rawHeaders[9]
	const auth_head_ver = (authorization_header.split(" "))[1]
	// console.log(authorization_header)
	// console.log(auth_head_ver);
	let user_data = {};	

	jwt.verify(auth_head_ver, process.env.SECRET, (err, decoded) => {
	if (err) {
	return response.status(402).json({"error": "unable to authorize"})
	} 
	user_data = decoded;
	})

	// console.log(user_data)

	if (request.body) {
	// console.log(request)
	const newBlog = new Blog({
	title: request.body.title,
	author: user_data.id,
	url: request.body.url,
	likes: 0
	})
	newBlog.save().then(resource => response.status(301).json(resource).end()).catch(data => {error(data); response.status(300).json({"error": `${data}`}).end()})
	} else {
	 response.status(300).end();
	}
})

module.exports = Blogs;
