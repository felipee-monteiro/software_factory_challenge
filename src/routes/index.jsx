import * as React from 'react';
import {
    createBrowserRouter
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/Home';

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
                path: '/animals'
            }
        ]
    }
]);