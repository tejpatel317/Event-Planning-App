import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark row">
        <div className="col container justify-content-start">
          <NavLink className="navbar-link navbar-left" to="/">Home</NavLink>
          <NavLink className="navbar-link navbar-left" to="/Events">Events</NavLink>
          <NavLink className="navbar-link navbar-left" to="/Create">Create</NavLink>
        </div>
        <div className="col container justify-content-end">
          <NavLink className="navbar-link navbar-right" to="/Login">Login</NavLink>
          <NavLink className="navbar-link navbar-right" to="/Signup">Signup</NavLink>
        </div>
    </nav>
  )
}

export default Nav