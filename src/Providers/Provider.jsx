import * as React from 'react';
import { getLocalStorageItems } from '../utils';
import { Context } from './Context';

export const FavoritesProvider = (props) => {
    const [favorites, setFavorites] = React.useState(getLocalStorageItems('zoo_favorites'));
    const [animals, setAnimals] = React.useState([]);

    const getAnimals = async () => {
        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10");
        const data = await response.json();
        return data;
    }

    React.useEffect(() => {
        getAnimals().then(setAnimals);
    }, []);

    return (
        <Context.Provider value={{
            favorites,
            setFavorites,
            animals
        }}>
            {props.children}
        </Context.Provider>
    );
}