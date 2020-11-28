import React from 'react'
import './css.css'
export default function ItemReponse(props) {
    return (
        props.displayCorrectReponse ? 

        <div className={`item-reponse-disabled  disabled ${props.selected ? 'selected': '' } ${props.isReponse ? 'correct': 'not-correct' }`} onClick={props.onClick}>
            {props.response}
        </div> :
        <div className={`item-reponse  pointer  ${props.selected ? 'selected': '' } `} onClick={props.onClick}>
            {props.response}
        </div>
    )
}
