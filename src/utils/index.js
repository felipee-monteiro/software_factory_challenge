export const getLocalStorageItems = (key) => {
    return JSON.parse(localStorage.getItem(key));
}
export const setLocalStorageItems = (key, value) => localStorage.setItem(key, value);