import React, { useState } from 'react';
import Button from './Button';
import './calculator.css';

const Calculator = () =>
{
    const [allComputation, setAllComputation] = useState('');

    const handleChangeInput = (e) =>
    {
        let newVal = e.target.textContent

        if (newVal === "=")
        {
            reset()
        }
        else
        {
            setAllComputation(prevAllComputation => prevAllComputation + newVal)
        }
    }

    const [operator, setOperator] = useState(false);
    const clickOperator = (e) =>
    {
        let newVal = e.target.textContent

        if (operator)
        {
            return;
        }

        setOperator(true)
        setAllComputation(prevAllComputation => prevAllComputation + ' ' + newVal + ' ')
    }

    const [inputText, setInputText] = useState('');
    const reset = () =>
    {
        // setAllComputation('');
        setInputText('');
        setOperator(false)
    }

    const clickNumber = (e) => 
    {
        let maxInput = inputText.length;

        if (maxInput >= 8)
        {
            return;
        }

        if (operator)
        {
            reset()
        }

        const newVal = e.target.textContent;
        setInputText(prevInputText => prevInputText + newVal)

        handleChangeInput(e)
    }

    const clickResult = () =>
    {
        let trimComputation = allComputation.trim();
        let computationArray = trimComputation.split(" ")
        let lastChar = computationArray[computationArray.length - 1];

        if (isNaN(lastChar))
        {
            computationArray.pop();
        }

        const result = computationArray.map

        let newString = allComputation.substring(0, allComputation.length - 2);

        console.log(computationArray);
        console.log(lastChar + '   ' + isNaN(lastChar));
    }

    return (
        <div className="container">
            <div className="preview">
                <p className="text-computation m-0">{allComputation}</p>
                <strong className="result-computation"></strong>
            </div>
            <input
                type="text"
                className="text-input"
                value={inputText}
                onChange={handleChangeInput}
            />
            <table>
                <tbody>
                    <tr>
                        <td className="p-0" colSpan="3"><Button handleClick={reset} text="Clear" id="btnClear" /></td>
                        <td className="p-0"><Button text="+" handleClick={clickOperator} id="btnPlus" /></td>
                    </tr>
                    <tr>
                        <td className="p-0"><Button text="7" handleClick={clickNumber} /></td>
                        <td className="p-0"><Button text="8" handleClick={clickNumber} /></td>
                        <td className="p-0"><Button text="9" handleClick={clickNumber} /></td>
                        <td className="p-0"><Button text="-" handleClick={clickOperator} id="btnminus" /></td>
                    </tr>
                    <tr>
                        <td className="p-0"><Button text="4" handleClick={clickNumber} /></td>
                        <td className="p-0"><Button text="5" handleClick={clickNumber} /></td>
                        <td className="p-0"><Button text="6" handleClick={clickNumber} /></td>
                        <td className="p-0"><Button text="x" handleClick={clickOperator} id="btnTimes" /></td>
                    </tr>
                    <tr>
                        <td className="p-0"><Button text="1" handleClick={clickNumber} /></td>
                        <td className="p-0"><Button text="2" handleClick={clickNumber} /></td>
                        <td className="p-0"><Button text="3" handleClick={clickNumber} /></td>
                        <td className="p-0"><Button text="÷" handleClick={clickOperator} id="btnDivide" /></td>
                    </tr>
                    <tr>
                        <td className="p-0" colSpan="2"><Button text="0" handleClick={clickNumber} /></td>
                        <td className="p-0"><Button text="." handleClick={clickNumber} /></td>
                        <td className="p-0"><Button text="=" handleClick={clickResult} id="btnEqual" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Calculator;