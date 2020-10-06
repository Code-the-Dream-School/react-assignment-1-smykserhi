import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './index.css';
import {Provider} from "./Context"


ReactDOM.render(
  <Provider >
    <App/>
  </Provider>
  ,
    document.getElementById('root')
 
);
