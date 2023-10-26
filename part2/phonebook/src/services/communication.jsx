import axios from 'axios';

const url = "http://localhost:3000/persons";


function getAll() {

  const request = axios.get(url)
  return request.then(response => response.data);

}

function update(id, contact) {
  const request = axios.put(`${url}/${id}`, contact)
  return request.then(response => response.data)
}

export default {
  getAll, update
};
