import * as React from 'react';
import {RouterProvider} from 'react-router-dom';
import Navbar from './components/Navbar';
import {routes} from './routes';

function App() {
  return <RouterProvider router={routes}/>;
}

export default App;