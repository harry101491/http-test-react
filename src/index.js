import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/';
// axios.defaults.headers.common['Authorization'] = 'My Token';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Intercepting the request and response through the axios
axios.interceptors.request.use((request) => {
    // console.log(request);
    return Promise.resolve(request);
});

// removing a specific interceptor
// axios.interceptors.request.eject(myInterceptor);

// axios.interceptors.response.use((response) => {
//     return Promise.resolve(response)
// }, (err) => {
//     return Promise.reject(err);
// });


ReactDOM.render( <App />, document.getElementById( 'root' ) );
