//console.log("Amount of arguments:", process.argv.length);
//console.log(process.argv)

if (process.argv.length < 3) {
   console.log("Provide your password");
    process.exit();
}

// console.log("Initialising the app.")
const mongoose = require('mongoose');

const password = process.argv[2];
const url =  `mongodb+srv://kimoleg:${password}@fullstack.jczyfoq.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url);

const contactSchema = new mongoose.Schema(
{
  name: String,
  number: String 
}
)

const Contact = mongoose.model("Contact", contactSchema);

if (process.argv.length == 3) {
  Contact.find({}).then(response => response.forEach(contact => console.log(`${contact.name}: ${contact.number}`))).then(response => mongoose.connection.close())
}

if (process.argv.length ==  5) {

const contactName = process.argv[3];
const contactNumber = process.argv[4];
const contact = new Contact({name: contactName, number: contactNumber})
contact.save().then(response => {console.log("Number saved"); mongoose.connection.close()})
}
