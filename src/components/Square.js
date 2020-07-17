import React from 'react'
import '../styles/styles.css'

const Square = (props) =>
{
    return (
        <button type="button" className="btn btn-block btn-secondary btn-square" onClick={props.clickFillButton} disabled={props.disabled}>
            {props.value}
        </button>
    )
}

export default Square
