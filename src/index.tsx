import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'pretendard/dist/web/static/pretendard.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; // <- 반드시 import!

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();

