import React, { Fragment } from 'react'
import Header from './Header'

import './Main.css'

export default props => (
  <Fragment>
    <Header />
    <main className="content">
      Conteúdo
    </main>
  </Fragment>
)
