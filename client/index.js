import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './app.css';
// if (process.env.NODE_ENV !== 'production') {
//   console.log('Looks like we are in development mode!!!!');
// }
// function App(){
//   return <div>welcom</div>
// }
console.log('地址', process.env.NODE_ENV)
ReactDOM.render(<App />, document.getElementById('root'));
