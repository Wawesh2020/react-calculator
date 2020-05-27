import React, { useState } from 'react'

export default () => {
  const [numberOne, setNumberOne] = useState('')

  const [numberTwo, setNumberTwo] = useState('')
  const [setOperators] = useState('')
  const [result, getResult] = useState('')

  return (
    <div className="form">
      <div className="intro">React Calculator</div>
      <input type="text" id="numberOne" onChange={event => setNumberOne(event.target.value)} value={numberOne} />
      <button type="button" id="operators" onClick={() => { setOperators('') }}>
        <select id="operators">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </button>
      <input type="text" id="numberTwo" onChange={event => setNumberTwo(event.target.value)} value={numberTwo} />
      <button type="button" onClick={() => { getResult('') }}>=</button>
      <input type="text" id="result" onChange={event => getResult(event.target.value)} value={result} />
      <div className="error">
        { numberOne || numberTwo ? { numberOne, numberTwo } : 'Please provide a valid number for both operands'}
      </div>


    </div>
  )
}
