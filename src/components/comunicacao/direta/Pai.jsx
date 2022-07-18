import React from 'react'
import Filho from './Filho'

const Pai = (props) => (
  <div>
    <Filho {...props}>João</Filho>
    <Filho sobrenome={props.sobrenome}>Maria</Filho>
    <Filho sobrenome="Silva">Pedro</Filho>
  </div>
)

export default Pai
