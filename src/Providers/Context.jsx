import * as React from 'react';
import { getLocalStorageItems, setLocalStorageItems } from '../utils';
export const Context = React.createContext(getLocalStorageItems('zoo_favorites') || setLocalStorageItems('zoo_favorites', JSON.stringify([])));