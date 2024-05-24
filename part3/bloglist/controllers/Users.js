const Users = require('express').Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {info, error} = require('../utils/logger');


Users.post('/reg', async (request, response) => {

// console.log(request.body);

const {username, password} = request.body

const saltRounds = 10;
const passwordHash = await bcrypt.hash(password, saltRounds);

const user = new User({
username,
passwordHash
})

await user.save();

response.json(user).status(204)

});


Users.post('/log', async (request, response) => {

// console.log(request.body);

const {username, password} = request.body;

const user = await User.findOne({username});
const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash);

if (!(user && passwordCorrect)) {
 return response.status(404).json({"error": "no user found"})
} 

const userForToken = {
    username: user.username,
    id: user._id,
  }

 const token = jwt.sign(userForToken, process.env.SECRET)

  response
    .status(200)
    .send({ token, username: user.username })



});
 

module.exports = Users
