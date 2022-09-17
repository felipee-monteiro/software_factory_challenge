import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/test'>Home</Link>
                    </li>
                    <li>
                        <Link to='/animals'>Animals</Link>
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