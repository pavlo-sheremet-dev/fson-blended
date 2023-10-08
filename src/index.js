import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { MobileMenuProvider } from 'Providers/MobileMenuProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MobileMenuProvider>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <App />
      </ThemeProvider>
    </MobileMenuProvider>
  </React.StrictMode>
);
