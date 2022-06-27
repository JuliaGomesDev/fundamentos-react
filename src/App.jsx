import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondisionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'

export default props => (
  <div className="app">
    <Card titulo="#08 - Comunicação Indireta" color="#8338ec">
      <Input></Input>
    </Card>
    <Card titulo="#08 - Comunicação Indireta" color="#011f4b">
      <Super></Super>
    </Card>
    <Card titulo="#07 - Comunicação Direta" color="#88d8b0">
      <Pai sobrenome="Freitas"></Pai>
    </Card>
    <Card titulo="#06 - Condicional v2" color="#f37735">
      <CondisionalComIf numero={10}></CondisionalComIf>
    </Card>
    <Card titulo="#05 - Condicional v1" color="#bf0000">
      <Condicional numero={13}></Condicional>
    </Card>
    <Card titulo="#04 - Repetição" color="#00b159">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="#03 - Componente Com Filhos" color="#00aedb">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#02 - Componente Com Paramentros" color="#ffc425">
      <ComParametro
        titulo="Esse é o título"
        subtitulo="Esse é o subtitulo"
      ></ComParametro>
    </Card>
    <Card titulo="#01 - Primero Conteudo" color="#d11141">
      <Primeiro></Primeiro>
    </Card>
  </div>
)
