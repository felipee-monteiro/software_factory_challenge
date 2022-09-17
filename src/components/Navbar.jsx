import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

function Navbar() {
    return (
        <>
            <nav className='flex j-between a-center'>
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
                <div className="favorites">
                    <Link to='/favorites'>
                        <AiOutlineHeart height='2rem' />
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
export default Navbar; 