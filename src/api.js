import axios from 'axios';

const API = {
    get: (url, params) => {
        return axios.get(url, params);
    },
    post: (url, body, params) => {
        return axios.post(url, body, params);
    }
};

export default API;