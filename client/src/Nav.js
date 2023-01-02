import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Nav({user, setUser}) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }


  return (
    <nav className="navbar navbar-dark bg-dark row">
        <div className="col container justify-content-start">
          <NavLink className="navbar-link navbar-left" to="/">Home</NavLink>
          <NavLink className="navbar-link navbar-left" to="/Events">Events</NavLink>
          <NavLink className="navbar-link navbar-left" to="/Create">Create</NavLink>
        </div>
        <div className="col container justify-content-end">
          {
            user ? 
            (
              <>
                <div id="usernamecontainer">
                  <h1 id="username">{user.first_name}</h1>
                </div>
                <Link className="navbar-link navbar-right" to="/" onClick={handleLogoutClick}>Logout</Link>
              </>
            )
            :
            (
              <>
                <NavLink className="navbar-link navbar-right" to="/Login">Login</NavLink>
                <NavLink className="navbar-link navbar-right" to="/Signup">Signup</NavLink>
              </>
            )

          }
        </div>
    </nav>
  )
}

export default Nav