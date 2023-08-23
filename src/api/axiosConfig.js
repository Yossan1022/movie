import axios from 'axios';

export default axios.create({
  baseURL:'https://example.com/api',
  headers: {"ngrok-skip-browser-warning": "true"}
});
