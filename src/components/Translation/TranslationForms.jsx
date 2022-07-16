import React, { useState } from 'react'
import { storageRead } from '../../utils/storage'
import { STORAGE_KEY_USER } from '../../const/storageKeys'
import { updateTranslations } from '../../api/translate'
import { checkForUser } from "../../api/user"
import { useForm } from 'react-hook-form'
import Signs from '../Signs/Signs'
const translationConfig = {
    minLength: 1
}
const TranslationForm = () => {
    let letterArray = ['']
    let lowerCaseTranslation = ''
    const { register, handleSubmit } = useForm()
    const [translation, setTranslation] = useState('')
    // Make it possible to display loading/error states
    const [loading, setLoading] = useState(false)
    const setApiError = useState(null)[1]

    /*  Function to send usertranslations to profile if they wish to save them
        INPUT: Retrieves userdata from local storage
        OUTPUT: Userdata is used to update translations if possible
    */
    const handleonSubmit = async () => {
        setLoading(true)
        let userData = storageRead(STORAGE_KEY_USER)
        if (userData === null) return
        const [userError, user] = await checkForUser(userData.username)
        if (userError) throw new Error("Cannot retrieve userdata")
        const { error } = await updateTranslations(user[0], translation)
        if (error !== null) setApiError(error)
        setLoading(false)
    }

    /*  Function that sends data to retrieve images
        INPUT: Event (Text input) change
        OUTPUT: Printed images of given letters
    */
    const handleChange = (event) => {
        letterArray = splitLetter()
        setTranslation(event.target.value)
    }
    /*  Helper-function to split sentence into letters
        INPUT: Only uses translation that is set every time user types in inputbox
        OUTPUT: Returns letterArray, an array of letters split from translation (user input)
    */
    const splitLetter = () => {
        lowerCaseTranslation = translation.toLowerCase()
        letterArray = lowerCaseTranslation.split("")
        return letterArray
    }
    return (
        <>
            <h3>Translate to ASL (American Sign Language)</h3>
            <form onSubmit={handleSubmit(handleonSubmit)}>
                <input type="text" placeholder="Hello, world!" {...register("translationText", translationConfig)} onChange={handleChange} />
                <button id="submit-btn" type="submit" disabled={loading}>Save to profile</button>
                {loading && <p>Saving...</p>}
            </form>
            <Signs translation={splitLetter()} key="translation" />
        </>
    )
}

export default TranslationForm