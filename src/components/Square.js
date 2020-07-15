import React from 'react'
import '../styles/styles.css'

const Square = (props) =>
{
    return (
        <button type="button" className="btn btn-block btn-secondary" onClick={props.clickFillButton}>
            {props.value}
        </button>
    )
}

export default Square
