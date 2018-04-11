import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerNotifications from './registerNotifications';

ReactDOM.render(<App />, document.getElementById('root'));
registerNotifications();
