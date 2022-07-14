import {useForm} from 'react-hook-form'
import React from 'react'
const usernameConfig = {
    required: true,
    minLength: 2
}
function LoginForm() {
    // Destructuring of useForm() hook so we can use register, handleSubmit and formState later on 
    const { register, handleSubmit, formState: { errors }} = useForm()

    /*  Function that sends data
        INPUT: Data object
        OUTPUT: Sends data to API to retreive login info
    */
    const handleonSubmit = (data) => {
        // Send data to API
        
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
                <button type="submit">Submit</button>
                { errorMessage }
            </form>
        </>
    )
}
export default LoginForm