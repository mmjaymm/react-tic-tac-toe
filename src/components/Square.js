import React, { Component } from 'react'
import '../styles/styles.css'

class Square extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            value: null
        }

        this.changeToX = this.changeToX.bind(this)
    }

    changeToX()
    {
        this.setState({
            value: 'X'
        })
    }

    render()
    {
        return (
            <button type="button" className="btn btn-block btn-secondary" onClick={this.changeToX}>
                {this.state.value}
            </button>
        )
    }
}

export default Square
