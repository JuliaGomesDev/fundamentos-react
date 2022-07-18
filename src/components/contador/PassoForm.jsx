import React from 'react'

const PassoForm = (props) => {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        type="number"
        id="passoInput"
        onChange={(e) => props.onPassoChange(+e.target.value)}
        value={props.passo}
      />
    </div>
  )
}

export default PassoForm
