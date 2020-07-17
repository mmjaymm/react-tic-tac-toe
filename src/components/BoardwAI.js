import React, { Component } from 'react'
import Square from './Square'

class Board extends Component
{
    constructor(props)
    {
        super(props)

        const myboard = [null, null, null, null, null, null, null, null, null] // Equivalent to Array(9).fill(null)
        const winningCombos = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8]
        ];
        const humanPlayer = 'O';
        const aiPlayer = 'X';
        this.state = {
            squares: myboard,
            player: 'X',
            disabled: false,
            winProbability: winningCombos
        }

        this.playAgain = this.playAgain.bind(this);
        this.disabledBoardSquare = this.disabledBoardSquare.bind(this);
    }

    displaySquare(indx)
    {
        return (
            <Square
                value={this.state.squares[indx]}
                clickFillButton={() => this.turn(indx, player)}
                disabled={this.state.disabled}
            />
        )
    }

    turnClick(indx)
    {

    }

    turn(indx, player)
    {
        const squares = this.state.squares.slice();

        // if (this.algoWinner(squares) || squares[indx])
        // {
        //     return;
        // }

        squares[indx] = player;



        let nextPlayer = this.state.player === 'X' ? 'O' : 'X';

        this.setState({
            squares: squares,
            player: nextPlayer
        });
    }

    disabledBoardSquare()
    {
        this.setState({ disabled: true });
    }

    algoWinner(squares)
    {
        const lines = this.state.winProbability;

        for (let i = 0; i < lines.length; i++)
        {
            const [x, y, z] = lines[i];
            // revise logic
            // if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z])
            // {
            //     return squares[x];
            // }

            if (squares[x] !== 'null')
            {
                if ([squares[x], squares[y], squares[z]].every((combination) => combination === squares[x]))
                {
                    return squares[x];
                }
            }
        }
        return null;

    }

    playAgain()
    {
        this.setState({
            squares: Array(9).fill(null),
            player: 'X',
            disabled: false
        })
    }

    render()
    {
        // let statusResult = this.algoWinner(this.state.squares);
        // let status;
        // if (statusResult)
        // {
        //     alert(`Player ${statusResult} is winner!`);
        //     status = `Player ${statusResult} is winner!`;
        // }
        // else
        // {
        //     status = `Next Player is ${this.state.player}`;
        // }

        return (
            <div className="row gameboard">
                <div className="col-12">
                    <h3 className="text-center">Your next move player O</h3>
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
                <div className="col-12">
                    <button className="btn btn-block btn-danger" onClick={this.playAgain}>Play Again!</button>
                </div>
            </div>
        )
    }
}

export default Board
