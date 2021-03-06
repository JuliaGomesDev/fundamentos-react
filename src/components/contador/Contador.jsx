import React from 'react'
import Display from './Display'

import './Contador.css'
import PassoForm from './PassoForm'
import Buttons from './Buttons'

class Contador extends React.Component {
  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0
  }

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo
    })
  }

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo
    })
  }

  mudarPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso
    })
  }

  render() {
    return (
      <div className="contador">
        <h2>Contador</h2>
        <PassoForm
          passo={this.state.passo}
          onPassoChange={this.mudarPasso}
        ></PassoForm>
        <Display valor={this.state.valor}></Display>
        <Buttons onInc={this.inc} onDec={this.dec}></Buttons>
      </div>
    )
  }
}

export default Contador
