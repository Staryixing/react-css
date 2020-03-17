import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './models/index';
import App from './app';
import './app.css';
// if (process.env.NODE_ENV !== 'production') {
//   console.log('Looks like we are in development mode!!!!');
// }

console.log('地址', process.env.NODE_ENV)
console.log('store', store)

ReactDOM.render(
        <App />
    // <Provider store={store}>
    // </Provider>
, document.getElementById('root'));
