import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: incluir, listar, alterar e excluir.'
}

export default class UserCrud extends Component {
  render() {
    return (
      <Main {...headerProps}>
        Cadastro de Usuário
      </Main>
    )
  }
}
