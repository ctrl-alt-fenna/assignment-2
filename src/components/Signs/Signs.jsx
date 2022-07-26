import React from 'react'
import './Signs.css'
import { getImagePath } from '../../img/imageMap'

function Signs({ translation }) {
    // Make sure item is a letter or just display it as text if not
    const isLetter = /^[a-z]/
    return (translation.map((item) => item.match(isLetter) ? <img id='letter' src={getImagePath(item)} alt={item} key={translation.indexOf(item) + (Math.random() * 10000)}></img> : <span key={translation.indexOf(item) + (Math.random() * 10000)} id='non-letter'>{item}</span>))
}
export default Signs