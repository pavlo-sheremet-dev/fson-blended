import React from 'react';
import ReactDOM from 'react-dom/client';

import 'modern-normalize';
import { persistor, store } from './redux/store';
import { App } from 'components';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ColorThemeProvider } from 'providers/ColorThemeProvider/ColorThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ColorThemeProvider>
        <App />
      </ColorThemeProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
