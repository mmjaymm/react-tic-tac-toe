import React from 'react';

const Button = (props) =>
{
    return (
        <button type="button" className="btn btn-block btn-success" id={props.id} onClick={props.handleClick}>
            {props.text}
        </button>
    );
}

export default Button;