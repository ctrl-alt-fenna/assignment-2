import { createHeaders } from "."
const apiURL = process.env.REACT_APP_API_URL

export const sendTranslation = async (translationText) =>{
 try {
    const response = await fetch(apiURL, {
        method: 'POST',
        headers: createHeaders(),
        body: JSON.stringify({
            translations: translationText
        })
    })
    if (!response.ok)
        throw new Error("Could not submit translation text " + translationText)
    const data = await response.json()
    return [null, data]
 }
 catch (error)
 {
    return [error.message, null]
 }
}