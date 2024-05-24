const express = require("express");
const server = express();
const config = require('./config.js')
const {info, error} = require('./utils/logger.js')

const mongoose = require("mongoose");
mongoose.connect(config.MONGODB_URL).then(response => info("Database initialised")).catch(data => error("Can't connect"));

server.use(express.json());
info("Express JSON initialised");

const routes = require("./controllers/Blogs.js");
server.use('/api/blogs', routes);
info("Router initialised")

const userRoutes = require("./controllers/Users.js");
server.use('/api/users', userRoutes)
info("User router initialized")

const cors = require("cors");
server.use(cors); // CORS must go after routes.


module.exports = server;



// for tomorrow 
