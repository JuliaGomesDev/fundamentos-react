import React, { useState } from 'react'
import Sub from './Sub'

export default props => {
  const [texto, setTexto] = useState('Valor')
  const [valor, setValor] = useState(0)

  function quandoClicar(valorGerado, texto) {
    setValor(valorGerado)
    setTexto(texto)
  }

  return (
    <div>
      <h4>
        {texto}: {valor}
      </h4>
      <Sub onClicar={quandoClicar}></Sub>
    </div>
  )
}
