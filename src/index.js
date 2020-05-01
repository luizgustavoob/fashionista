import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store/store';
import App from './App';
import Routes from './routes/routes';
import 'react-toastify/dist/ReactToastify.min.css'; 
import './styles/reset.css';

const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <ToastContainer autoClose={2000} />
        <Routes />
      </App>
    </Router>
  </Provider>, target
);