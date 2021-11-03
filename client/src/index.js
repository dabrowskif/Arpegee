import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
/* import { composeWithDevTools } from 'redux-devtools-extension'; */

import { createTheme, ThemeProvider } from '@mui/material';
import reducers from './reducers';
import App from './App.js';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// const store = createStore(reducers, compose(applyMiddleware(thunk), composeWithDevTools()));

const persistor = persistStore(store);
const theme = createTheme();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
