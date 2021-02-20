import axios from 'axios';

export default axios.create({
    // Localhost is mapped to proxy of https://age-of-empires-2-api.herokuapp.com/
    baseURL: 'http://localhost:8080/api/v1/',
    params: {
        // API params go here
    }
});