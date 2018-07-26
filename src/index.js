import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';                           // React-Redux for managing application state
import { BrowserRouter } from 'react-router-dom';                 // React-Router from managing links and routing of SPA
import App from './views/App';
import './index.css';
import configureStore from './reducers/store';                    // Import Redux Store
import { PersistGate } from 'redux-persist/integration/react';    // Persist Gate for persist store for React

const { store, persistor } = configureStore();                    // Redux-Persist saves application state to memory

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div className="signal"></div>} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);