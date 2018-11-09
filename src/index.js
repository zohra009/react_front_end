import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FoodPage from './FoodPage'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';






// import {createStore} from 'redux'
// import reducer from './Redux/reducer'
//
// import {Provider} from 'react-redux'
//
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  
  <FoodPage />

  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
