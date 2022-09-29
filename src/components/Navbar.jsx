import * as React from 'react';
import ReactSearchBox from 'react-search-box';
import {useNavigate} from 'react-router-dom';
import {Context} from '../Providers/Context';
import {Link, Outlet} from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai';

function Navbar() {
    const {animals} = React.useContext(Context);
    const navigate = useNavigate();
    const data = [];

    for (const placeholder in animals) {
        const { name } = animals[placeholder];
        data.push({
            key: name,
            value: name
        });
    }
  

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
                <ReactSearchBox
                    placeholder="Pesquisar Animais..."
                    value="Doe"
                    data={data}
                    onSelect={item => navigate(`/animals/details/${item.item.key}`)}
                />
                <div className="flex j-center favorites">
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
