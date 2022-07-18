import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './contexts/CartContext';
import { ToastContextProvider } from './contexts/ToastProvider';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ToastContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartContextProvider>
        <GlobalStyle />
      </ToastContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
