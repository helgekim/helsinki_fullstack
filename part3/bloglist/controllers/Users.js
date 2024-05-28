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

try {
await user.save();
} catch {
response.status(402).json({"error": "can't create a user"})
}

response.json(user).status(204)

});


Users.post('/log', async (request, response) => {

// console.log(request.body);

const {username, password} = request.body;

try {var user = await User.findOne({username})

} 
catch {
return response.status(404).json({"error": "no user found"})
}


const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash);

if (!(user && passwordCorrect)) {
 return response.status(404).json({"error": "no user found or wrong password"})
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
