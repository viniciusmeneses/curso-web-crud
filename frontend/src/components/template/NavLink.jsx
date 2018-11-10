import React from 'react'
import { Link } from 'react-router-dom'

import './NavLink.css'

export default props => {
    const { to, icon, name } = props
    return (
      <li className={`menu-link`} >
        <Link to={to}>
          <i className={`fa fa-${icon}`}></i> {name}
        </Link>
      </li>
    )
}
