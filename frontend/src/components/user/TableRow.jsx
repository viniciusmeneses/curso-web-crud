import React from 'react'

export default props => {
  const { user, load, remove } = props
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td className="d-flex justify-content-center align-items-center">
        <button className="btn btn-warning" onClick={() => load(user)}>
          <i className="fa fa-pencil"></i>
        </button>
        <button className="btn btn-danger ml-2" onClick={() => remove(user)}>
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  )
}
