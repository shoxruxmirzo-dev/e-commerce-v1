import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { BrowserRouter } from 'react-router';
import { AppProviders } from './contexts/AppProviders.jsx';
import { ThemeProvider } from './contexts/ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppProviders>
        <App />
      </AppProviders>
    </ThemeProvider>
  </BrowserRouter>
);
