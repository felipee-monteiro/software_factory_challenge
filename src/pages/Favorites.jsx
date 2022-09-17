import * as React from 'react';
import {toast} from 'react-toastify';
import {FavoritesContext} from '../Providers/FavoritesContext';
import {setLocalStorageItems} from '../utils';

function Favorites() {
    const {favorites, setFavorites} = React.useContext(FavoritesContext);

    React.useEffect(() => {
        setLocalStorageItems('zoo_favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <main>
            <section className="grid-section">
                {!favorites.length ? <div className='center h-100'><h1>Ainda Não há favoritos!</h1></div> : favorites.map((favorite) => (
                    <section className='card'>
                        <h1>{favorite.name}</h1>
                        <img src={favorite.image_link} width='200' height='200' alt={favorite.name} />
                        <p>Nome em Latim: <i>{favorite.latin_name}</i></p>
                        <p>Habitat Natural: <i>{favorite.habitat}</i></p>
                        <p>Dieta: {favorite.diet}</p>
                        <p>Localização: {favorite.geo_range}</p>
                        <button className="btn" type='button' onClick={() => {
                            setFavorites(() => favorites.filter(animal => animal.id !== favorite.id));
                            return toast.info("Removido com suceso!");
                        }}>
                            Remover
                        </button>
                    </section>
                ))}
            </section>
        </main>
    );
}

export default Favorites;