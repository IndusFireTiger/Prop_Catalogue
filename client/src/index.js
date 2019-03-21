import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// rendering App under the HTML element 'root'
ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker used to make React app work offline and load faster
// when used under register mode
// here it is unregister, which opts out of the service
serviceWorker.unregister();
