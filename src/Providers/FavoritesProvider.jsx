import * as React from 'react';
import { getLocalStorageItems } from '../utils';
import { FavoritesContext } from './FavoritesContext';

export const FavoritesProvider = (props) => {
    const [favorites, setFavorites] = React.useState(getLocalStorageItems('zoo_favorites'));

    return (
        <FavoritesContext.Provider value={{
            favorites,
            setFavorites
        }}>
            {props.children}
        </FavoritesContext.Provider>
    );
}