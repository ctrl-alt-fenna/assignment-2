import handSigns from '../../img/imageMap'
import React, {useEffect, useState} from 'react'
import { storageRead, storageSave } from '../../utils/storage'
import { STORAGE_KEY_USER } from '../../const/storageKeys'
import { translationText } from '../../api/translate'
import withAuth from '../../hoc/withAuth'
import {useForm} from 'react-hook-form'
import Signs from '../Signs/Signs'
// Hand images
const translationConfig = {
    minLength: 1
}
// eslint-disable-next-line
const {hand_a, hand_b, hand_c, hand_d, hand_e, hand_f, hand_g, hand_h, hand_i, hand_j, hand_k, hand_l, hand_m,hand_n, hand_o, hand_p, hand_q, hand_r, hand_s, hand_t, hand_u, hand_v, hand_w, hand_x ,hand_y ,hand_z} = handSigns
function TranslationForm()
{
    let letterArray =['h']
    const { register, handleSubmit, formState: { errors }} = useForm()
    const [translation , setTranslation] = useState('')
    // Make it possible to display loading/error states
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    // const splitTranslate = () => {
    //     let s = translation.split()
    //     return s
    // }
    /*  Function that sends data
        INPUT: Data object
        OUTPUT: Sends data to API to retreive login info
    */
   const handleChange = (event) => {
    letterArray = splitLetter()
    setTranslation(event.target.value)
   }
   const splitLetter = () => {
    letterArray = translation.split("")
    return letterArray
   }
    return (
        <>
            <h3>Translate to ASL (American Sign Language)</h3>
            <form>
            <input type="text" placeholder="Hello, world!" {...register("translationText", translationConfig)} onChange={handleChange}/>
            <button id="submit-btn" type="submit" disabled={loading}>Translate</button>
            { loading && <p>Translating...</p>}
            { apiError && <p>{apiError}</p>}
            </form>
            <Signs translation={splitLetter()}/>
            {/* {<p> {translation}</p>} */}
        </>
    )
}
export default TranslationForm