import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // react-redux 6.版本 7版本报错
import store from './models/index';
import App from './app';
import './app.css';

// if (process.env.NODE_ENV !== 'production') {
//   console.log('Looks like we are in development mode!!!!');
// }

console.log('地址', process.env.NODE_ENV)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
