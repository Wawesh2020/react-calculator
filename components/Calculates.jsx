import React, { useState } from 'react'

export default () => {
  const [number, setNumber] = useState('')

  const firstNumber = (event) => {
    setNumber(event.target.value)
  }

  const secondNumber = (event) => {
    setNumber(event.target.value)
  }

  const equalsNumber = () => {
    setNumber('')
  }

  const result = (event) => {
    result(event.target.value)
  }

  const operator = () => {
    setNumber('')
  }

  return (
    <div className="form">
      <div className="intro">React Calculator</div>
      <input type="text" id="search" onChange={firstNumber} value={number} />
      <div className="num1">{number}</div>
      <button type="button" onClick={operator}>
        <select id="operators">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </button>
      <input type="text" id="search" onChange={secondNumber} value={number} />
      <div className="num2">{number}</div>
      <button type="button" onClick={equalsNumber}>=</button>
      <input type="text" id="search" onChange={result} value={number} />
      <div className="result">{number}</div>
      <div className="error">Please provide a valid number for both operands</div>


    </div>
  )
}
