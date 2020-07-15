import React, { Component } from 'react'
import Square from './Square'

class Board extends Component
{
    constructor(props)
    {
        super(props)

        const myboard = [null, null, null, null, null, null, null, null, null] // Equivalent to Array(9).fill(null)

        this.state = {
            squares: myboard
        }
    }

    displaySquare(indx)
    {
        return <Square
            value={this.state.squares[indx]}
            onClick={() => this.changeMyBoard(indx)}
        />
    }

    changeMyBoard(indx)
    {
        const squares = this.state.squares.slice();
        squares[indx] = 'X';
        this.setState({ squares: squares });
    }

    render()
    {
        return (
            <div className="row gameboard">
                <div className="col-12">
                    <h3 className="text-center">Next Player : X</h3>
                </div>
                <div className="col-12">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>{this.displaySquare(0)}</td>
                                <td>{this.displaySquare(1)}</td>
                                <td>{this.displaySquare(2)}</td>
                            </tr>
                            <tr>
                                <td>{this.displaySquare(3)}</td>
                                <td>{this.displaySquare(4)}</td>
                                <td>{this.displaySquare(5)}</td>
                            </tr>
                            <tr>
                                <td>{this.displaySquare(6)}</td>
                                <td>{this.displaySquare(7)}</td>
                                <td>{this.displaySquare(8)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Board
