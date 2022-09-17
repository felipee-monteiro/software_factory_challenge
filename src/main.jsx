import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {FavoritesProvider} from './Providers/FavoritesProvider';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../public/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <FavoritesProvider>
        <ToastContainer autoClose={2000} theme='dark' />
        <App />
    </FavoritesProvider>
);
