import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function up(){return  ReactDOM.render(<App />, document.getElementById('root'))}
// up();
 setInterval(up,1000)
registerServiceWorker();
