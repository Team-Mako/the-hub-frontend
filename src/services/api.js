import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.thehub.wmdd.ca',
});

export default api;
