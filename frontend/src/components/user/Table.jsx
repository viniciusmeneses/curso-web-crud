import React from 'react'

export default props => {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.renderRows()}
      </tbody>
    </table>
  )
}
