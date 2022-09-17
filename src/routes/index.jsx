import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/Home';
import Animals from '../pages/Animals';
import Galery from '../pages/Galery';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        children: [
            {
                path: '/test',
                element: <HomePage />
            },
            {
                path: '/animals',
                element: <Animals />
            },
            {
                path: '/galery',
                element: <Galery />
            }
        ]
    }
]);