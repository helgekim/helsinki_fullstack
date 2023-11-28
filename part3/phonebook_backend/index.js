const express = require("express");
const app  = express();

require("dotenv").config();

const Contact = require("./modules/Note");

const cors = require("cors");

app.use(cors());

app.use(express.static("dist"));

let contacts = [
	{ 
		"id": 1,
		"name": "Arto Hellas", 
		"number": "040-123456"
	},
	{ 
		"id": 2,
		"name": "Ada Lovelace", 
		"number": "39-44-5323523"
	},
	{ 
		"id": 3,
		"name": "Dan Abramov", 
		"number": "12-43-234345"
	},
	{ 
		"id": 4,
		"name": "Mary Poppendieck", 
		"number": "39-23-6423122"
	}
]; 

app.use(express.json());



const logger = require("morgan");
app.use(logger(":method :url :status - :content"));
logger.token("content", function (req, res) { return JSON.stringify(req.body); });


app.get("/", (request, response) => {
	response.send("<div><h1>Welcome to phonebook's API!</h1><p>send all requests to <i>api/persons/....</i></p></div>");
});


app.get("/info", (request, response) => {
	let contactLength = contacts.length;
	let date = new Date();
	response.send(`<div>
	<div>
	<p> This phonebook has ${contactLength} entries </p>
	</div>
	<div>
	Today is ${date}
	</div>
</div`);
});

app.get("/api/persons", (request, response) =>  {
	Contact.find({}).then(resources => response.send(resources)).catch(error => {
		console.log("Couldn't find no damn data", error);
		response.send(contacts);
	});
});

app.get("/api/persons/:id", (request, response) => {
	Contact.find({_id: request.params.id}).then(resource => resource ? response.json(resource) : response.status(404).end()).catch(error => {
		console.log(error);
		response.status(500).end();
	});
});

app.post("/api/persons", (
	request, response
) => 

{
	// console.log("Hi")
	// console.log(request.body)
	let contact = request.body;

	if (!contact.name) {
		// console.log("No name")
		return response.status(403).end();
	} else if (!contact.number) {
		// console.log("No number")
		return response.status(403).end();
	}

	

	let newContact = new Contact({
		"name": contact.name,
		"number": contact.number});

	// contacts.push(newContact)
	newContact.save().then(contact => response.json(request.body)).catch(
		error => {
	 console.log(error);
	 response.status(400).json(error).end();
		}
	);
}

);

app.put("/api/persons/:id", (request, response) => {

	console.log(request.params.id);

	Contact.findByIdAndUpdate(request.params.id, request.body, {new: true, runValidators: true, context:"query"}).then(contact => contact ? response.json(contact) : response.status(300).end()).catch(error => {
		console.log(error); response.status(500).end();
	});

});

/*
app.get('/api/persons/:id', (request, response) => {	

	let id = request.params.id; 
	let contact = contacts.filter(contact => contact.id === Number(id));
	if (contact.length == 1) {
	 response.send(contact)
	} else {
	 response.status(404).end()
	}

 	Contact.find({_id: id}).then(resource => response.send(resource)).catch(error => console.log("Failed to find a resource"))
})*/

app.delete("/api/persons/:id", (request, response) => {
	let id = request.params.id;
	// contacts = contacts.filter(contact => contact.id != Number(id));
	Contact.deleteOne({_id: id}).then(resource => response.status(204).end()).catch(error => console.log("Failed to delete a contact", error));
});

const PORT = process.env.PORT ||  3001;
app.listen(PORT, () => {console.log(`Server runs on port ${PORT}`);});
