import React, { Component } from 'react'
import Square from './Square'

class Board extends Component
{
    constructor(props)
    {
        super(props)

        const myboard = [null, null, null, null, null, null, null, null, null] // Equivalent to Array(9).fill(null)

        this.state = {
            squares: myboard,
            player: 'X'
        }
    }

    displaySquare(indx)
    {
        return (
            <Square
                value={this.state.squares[indx]}
                clickFillButton={() => this.changeMyBoard(indx)}
            />
        )
    }

    changeMyBoard(indx)
    {
        const squares = this.state.squares.slice();
        squares[indx] = this.state.player;
        let nextPlayer = this.state.player === 'X' ? 'O' : 'X';

        this.setState({
            squares: squares,
            player: nextPlayer
        });
    }

    changePlayer()
    {
        if (this.state.player === 'X')
        {
            this.setState({ player: 'O' })
        }
        else
        {
            this.setState({ player: 'X' })
        }
    }

    algoWinner(squares)
    {
        const lines = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8]
        ];

        for (let i = 0; i < lines.length; i++)
        {
            const [x, y, z] = lines[i];

            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z])
            {
                return squares[x];
            }

            return null;
        }

    }

    render()
    {
        // console.log(this.state.squares);

        console.log(this.algoWinner(this.state.squares));

        return (
            <div className="row gameboard">
                <div className="col-12">
                    <h3 className="text-center">Next Player : {this.state.player}</h3>
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
