/*  Function to save to local storage
    INPUT: A key-value pair to add to local storage
    OUTPUT: Nothing
*/

export const storageSave = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
}
/*  Function to read localstorage
    INPUT: A key to look for
    OUTPUT: The data associated with a key if found, or null if there is no data for given key
*/
export const storageRead = (key) => {
    const data = sessionStorage.getItem(key)
    if (data) return JSON.parse(data)
    return null
}

export const storageDelete = key => {
    sessionStorage.removeItem(key)
}
