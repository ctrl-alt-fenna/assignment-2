import handSigns from "../../img/imageMap"
// import a from "../../img/a.png"
import React from "react"
function TranslationForm()
{
    const {hand_a, hand_b, hand_c, hand_d} = handSigns
    return (
        <>
            <h3>My hands</h3>
            <img src={hand_a} alt="Cool hand"></img>
        </>
    )
}
export default TranslationForm