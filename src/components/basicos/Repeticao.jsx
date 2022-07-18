import React from 'react'
import produtos from '../../data/produtos'

const Repeticao = (props) => {
  function getProductsListItem() {
    return produtos.map((prod) => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.nome} - R$ {prod.preco}
        </li>
      )
    })
  }
  return (
    <div>
      <h2>Repetiçao</h2>
      <ul>{getProductsListItem()}</ul>
    </div>
  )
}

export default Repeticao
