import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://instagram-react-33e3f.firebaseio.com/'
});

export default instance;
