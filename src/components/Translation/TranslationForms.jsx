import handSigns from "../../img/imageMap"
import React, {useEffect, useState} from 'react'
import { storageRead, storageSave } from '../../utils/storage'
import { STORAGE_KEY_USER } from '../../const/storageKeys'
import { translationText } from '../../api/translate'
import {useForm} from 'react-hook-form'
// Hand images
const translationConfig = {
    minLength: 1
}
// eslint-disable-next-line
const {hand_a, hand_b, hand_c, hand_d, hand_e, hand_f, hand_g, hand_h, hand_i, hand_j, hand_k, hand_l, hand_m,hand_n, hand_o, hand_p, hand_q, hand_r, hand_s, hand_t, hand_u, hand_v, hand_w, hand_x ,hand_y ,hand_z} = handSigns
function TranslationForm()
{
    const { register, handleSubmit, formState: { errors }} = useForm()
    // const {user, setUser} = useUser()
    // Make it possible to display loading/error states
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    /*  Function that sends data
        INPUT: Data object
        OUTPUT: Sends data to API to retreive login info
    */
    const handleonSubmit = async ({translationText}) => {
        setLoading(true)
        // Send data to API
        const [error, translationResponse] = await translationText(translationText)
        // Set error message only if there is one so page doesn't need to rerender unnecessarily
        if (error !== null)
            setApiError(error)
        if (translationResponse !== null){
            storageSave(STORAGE_KEY_USER, translationResponse)
            // setUser(translationResponse)
        }
        setLoading(false)
    }
    /*  Function to deal with errors
        INPUT: Any errors that came up
        OUTPUT: <p> element that contains the errormessage
    */
    const errorMessage = (() => {
        if (!errors.translationText)
            return null
        if (errors.translation.type === 'number')
            return <p>Cannot translate numbers!</p>
        if (errors.username.type === 'minLength')
            return <p>Translation must be of at least 1 character!</p>
    })()
    return (
        <>
            <h3>Translate to ASL (American Sign Language)</h3>
            <form onSubmit={handleSubmit(handleonSubmit)}>
            <input type="text" placeholder="Hello, world!" {...register("translationText", translationConfig)}/>
            <button id="submit-btn" type="submit" disabled={loading}>Translate</button>
            {/* <img src={hand_a} alt="Cool hand"></img> */}
            { errorMessage }
            { loading && <p>Translating...</p>}
            { apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}
export default TranslationForm