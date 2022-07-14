import { createHeaders } from "."
const apiURL = process.env.REACT_APP_API_URL

/*  Function that reads userdata from API database
    INPUT: A username to check
    OUTPUT: The userdata, or an error of user does not exist in database
*/
const checkForUser = async (username) => {
    try{
        const response = await fetch(`${apiURL}?username=${username}`)
        if (!response.ok)
            throw new Error('Could not complete request')
        const data = await response.json()
        return [null, data]
    }
    catch (error){
        return[ error.message, null]
    }
}

/*  Function to create user in API database
    INPUT: A username to create
    OUTPUT: A new user in database
*/
const createUser = async (username) => {
    try{
        const response = await fetch(apiURL,
            {
                method: 'POST',
                headers: createHeaders(),
                body: JSON.stringify({
                    username,
                    translations: []
                })
            })
        if (!response.ok)
            throw new Error('Could not create user with username ' + username)
        const data = await response.json()
        return [null, data]
    }
    catch (error){
        return[ error.message, null]
    }
}
/*  Function to login user or create new user if username doesn't exist
    INPUT: A username given through userinput
    OUTPUT: The userdata, or creation of a new user with given username
*/

export const loginUser = async (username) => {
    const [checkError, user] = await checkForUser(username)
    // Check if errors occur
    if (checkError !== null) return[checkError, null]
    // Check if user exists
    if (user.length > 0) return [null, user.pop()]
    // Creates new user because username doesnt exist
    return await createUser(username)
}