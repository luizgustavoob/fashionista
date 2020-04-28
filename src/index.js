import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import App from './App';
import Routes from './routes';
import './reset.css';
import 'react-toastify/dist/ReactToastify.min.css'; 

const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <ToastContainer autoClose={2500} />
        <Routes />
      </App>
    </Router>
  </Provider>, target
);