import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className='center'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/animals'>Animais</Link>
                    </li>
                    <li>
                        <Link to='/galery'>Galeria</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
export default Navbar; 