const express = require('express');
const app  = express();

const contacts = [
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



const PORT = 3001
app.listen(PORT, () => {console.log(`Server runs on port ${PORT}`)})
