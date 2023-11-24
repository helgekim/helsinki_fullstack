require('dotenv').config();

const mongoose = require('mongoose');

const URL = process.env.MONGODB_URL;

mongoose.connect(URL).then(
 response => console.log("Connected")
).catch(
 error => console.log(error.message)
);

const contactSchema = new mongoose.Schema({
  name: String,
  number: String
})

contactSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
}})

module.exports = mongoose.model("Contact", contactSchema)
