import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Login from './features/login';

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
