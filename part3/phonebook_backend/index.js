const express = require('express');
const app  = express();

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

app.use(express.json())

app.get('/', (request, response) => {
 response.send(`<div><h1>Welcome to phonebook's API!</h1><p>send all requests to <i>api/persons/....</i></p></div>`)
})

app.get('/info', (request, response) => {
let contactLength = contacts.length;
let date = new Date();
response.send(`<div>
	<div>
	<p> This phonebook has ${contactLength} entries </p>
	</div>
	<div>
	Today is ${date}
	</div>
</div`)
})

app.get('/api/persons', (request, response) =>  {
 response.send(contacts)
})

app.post('/api/persons', (
	request, response
) => 

{
	// console.log(request.body)
	let contact = request.body;

	if (!contact.name) {
		// console.log("No name")
		return response.status(403).end()
	} else if (!contact.number) {
		// console.log("No number")
		return response.status(403).end()
	}


	let newContact = {
	"name": contact.name,
	"phone": contact.number,
	"id": Math.floor(Math.random() + (contacts.length - 1) * contacts.length)
	};

	contacts.push(newContact)
	response.json(request.body)
}

)

app.get('/api/persons/:id', (request, response) => {	

	let id = request.params.id;
	let contact = contacts.filter(contact => contact.id === Number(id));
	if (contact.length == 1) {
	 response.send(contact)
	} else {
	 response.status(404).end()
	}
})

app.delete('/api/persons/:id', (request, response) => {
	let id = request.params.id;
        contacts = contacts.filter(contact => contact.id != Number(id));
	response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {console.log(`Server runs on port ${PORT}`)})
