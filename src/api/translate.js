import { createHeaders } from "."
import { storageDelete, storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from '../const/storageKeys';
import { useUser } from "../context/UserContext";
const apiURL = process.env.REACT_APP_API_URL
/*  Function to update user-translation history
    INPUT: A userobject and a translation string
    OUTPUT: A new entry into the database to add translationtext to translations array
*/
export const updateTranslations = async (user, translation) => {
  try {
    const response = await fetch(`${apiURL}/${user.id}`, {
      method: 'PATCH',
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, translation]
      })
    })
    if (!response.ok) throw new Error('Could not update translations')
    const result = await response.json()
    storageDelete(STORAGE_KEY_USER)
    storageSave(STORAGE_KEY_USER, result)
    return [null, result]
}
catch (error) { return [error.message, null] }
}
/*  Function to clear userhistory
INPUT: A user object
OUTPUT: A cleared translationhistory for given user
*/
export const clearUserHistory = async (user) => {
    let username = user.username
    try {
        const response = await fetch(`${apiURL}/${user.id}`, {
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify({
        username,
        translations: []
      })
    })
    if (!response.ok) throw new Error('Could not clear translation history')
    const result = await response.json()
    storageDelete(STORAGE_KEY_USER)
    storageSave(STORAGE_KEY_USER, result)
    return [null, result]
}
  catch (error) { return [error.message, null] }
}