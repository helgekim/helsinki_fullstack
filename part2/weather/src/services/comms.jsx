import axios from 'axios';

const url = "https://studies.cs.helsinki.fi/restcountries/api/all";

const receive = () => axios.get(url).then(countries => countries.data);

export default {
  receive
}
