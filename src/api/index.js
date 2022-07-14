const apiKey = process.env.REACT_APP_API_KEY
/*  Function to set headers for API request
    INPUT: Nothing
    OUTPUT: An HTTP request with given headers
*/
export const createHeaders = () => {
    return {
        'Content-Type':'application/json',
        'x-api-key': apiKey
    }
}