import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Noturno-Darkling/testing_DB',
});

export default api;
