import React from 'react'
import { getImagePath } from '../../img/imageMap'
function Signs ({ translation }) {
    const isLetter = /^[a-z]/
    return (translation.map((item) => item.match(isLetter) ? <img src={getImagePath(item)} alt={item}></img> : <span>{item}</span>))
}
export default Signs