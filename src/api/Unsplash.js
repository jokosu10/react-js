import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 21a4d538ebb38e9b21538e3bdd3a8928e1b90bfd1bda58452c395073399cfb7d'
    }
});

