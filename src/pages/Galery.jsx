import * as React from 'react';
import {toast} from 'react-toastify';
import ReactLoading from 'react-loading';
import {FavoritesContext} from '../Providers/FavoritesContext';
import {AiOutlineHeart} from 'react-icons/ai';
import {setLocalStorageItems} from '../utils';

function Galery() {
    const [animals, setAnimals] = React.useState([]);
    const {favorites, setFavorites} = React.useContext(FavoritesContext);

    const getAnimals = async () => {
        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/8");
        return await response.json();
    }

    React.useEffect(() => {
        setLocalStorageItems('zoo_favorites', JSON.stringify(favorites));
    }, [favorites]);

    React.useEffect(() => {
        getAnimals().then(setAnimals);
    }, []);

    return (
        <>
            <main>
                <section className="grid-section">
                    {animals.length ?
                        animals.map((animal) => (
                            <div className='card' key={animal.id}>
                                <h1>{animal.name}</h1>
                                <img src={animal.image_link} width='200' height='200' alt={animal.name} />
                                <p>Nome em Latim: <i>{animal.latin_name}</i></p>
                                <p>Habitat Natural: <i>{animal.habitat}</i></p>
                                <p>Dieta: {animal.diet}</p>
                                <p>Localização: {animal.geo_range}</p>
                                <button className="btn" onClick={() => {
                                    const animalAlreadyExists = favorites.some(favorite => favorite.id === animal.id);
                                    if(!animalAlreadyExists) {
                                        setFavorites(state => [...state, animal]);
                                        return toast.info("Adicionado com sucesso!");
                                    };
                                    return toast.error("Animal já adicionado.");
                                }}>
                                    <AiOutlineHeart />
                                </button>
                            </div>
                        ))
                        : <div className='center'><ReactLoading type='spin' /></div>}
                </section>
            </main>
        </>
    );
}
export default Galery;