import axios from 'axios';

//ad318e11c048fa693d824a5e61a478e6
//{city name}&appid=ad318e11c048fa693d824a5e61a478e6
const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5'
});

export default api;