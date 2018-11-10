import React from 'react'
import NavLink from './NavLink'

import './Nav.css'

export default props => (
  <aside className="menu-area">
    <nav className="menu">
      <ul>
        <NavLink to="/" icon="home" name="Início" />
        <NavLink to="/users" icon="users" name="Usuários" />
      </ul>
    </nav>
  </aside>
)
