import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import { loginUser } from '../../api/user'
import { storageRead, storageSave } from '../../utils/storage'
import { useUser } from '../../context/UserContext'
const usernameConfig = {
    required: true,
    minLength: 2
}
function LoginForm() {
    // Destructuring of useForm() hook so we can use register, handleSubmit and formState later on 
    const { register, handleSubmit, formState: { errors }} = useForm()
    const {user, setUser} = useUser()
    const navigate = useNavigate()
    // Make it possible to display loading/error states
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    // Side effects
    useEffect(() => {
        if (user !== null){
            navigate('/profile')
        }
    }, [user, navigate])

    // Event handlers

    /*  Function that sends data
        INPUT: Data object
        OUTPUT: Sends data to API to retreive login info
    */
    const handleonSubmit = async ({username}) => {
        setLoading(true)
        // Send data to API
        const [error, userResponse] = await loginUser(username)
        // Set error message only if there is one so page doesn't need to rerender unnecessarily
        if (error !== null)
            setApiError(error)
        if (userResponse !== null){
            storageSave('translation-user', userResponse)
            setUser(userResponse)
        }
        setLoading(false)
    }
    /*  Function to deal with errors
        INPUT: Any errors that came up
        OUTPUT: <p> element that contains the errormessage
    */
    const errorMessage = (() => {
        if (!errors.username)
            return null
        if (errors.username.type === 'required')
            return <p>Username is required!</p>
        if (errors.username.type === 'minLength')
            return <p>Username must be of at least 2 characters</p>
    })()
    return (
        <>
        <h1>What is your name?</h1>
            <form onSubmit={handleSubmit(handleonSubmit)}>
                <input type="text" placeholder='Username' {...register("username",usernameConfig)} />
                <button type="submit" disabled={loading}>Submit</button>
                {loading && <p>Logging in...</p>}
            </form>
        </>
    )
}
export default LoginForm