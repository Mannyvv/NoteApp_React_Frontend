const http = require('http');
import { API_URL } from './API';

setInterval(() => {
  http.get(API_URL);
}, 25 * 60 * 1000); // every 25 minutes
