import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/routes';
import App from './App';
import store from './store';
import 'react-toastify/dist/ReactToastify.min.css'; 
import './styles/reset.css';

const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <ToastContainer autoClose={2000} />
        <Routes />
      </App>
    </BrowserRouter>
  </Provider>,
  target
);