import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './pages/Home';
import GlobalStyle from './styles/global';

import './config/ReactotronConfig';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <Home />
      </PersistGate>
    </Provider>
  );
}

export default App;
