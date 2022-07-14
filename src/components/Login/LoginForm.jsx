import {useForm} from 'react-hook-form'
import React from 'react'
function SimpleForm() {
    const { register, handleSubmit, formState: { errors }} = useForm()

    const handleonSubmit = (data) => {
        // Send data to API
        console.log(data.username)
    }
    return (
        <>
            <form onSubmit={handleSubmit(handleonSubmit)}>
                <input type="text" placeholder='Username' {...register("username",{required: true, minLength: 2})} />
                <button type="submit">Submit</button>
                { errors.username && <p>Username must be of at least 2 characters!</p>}
            </form>
        </>
    )
}
export default SimpleForm