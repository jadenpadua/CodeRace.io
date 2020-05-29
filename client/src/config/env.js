let apiurl = 'https://coderace.io/api';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  apiurl = 'http://localhost:5000/api';
}

export default {
    API_URL: process.env.API_URL || apiurl || 'http://localhost:5000/api'
}