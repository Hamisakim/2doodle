import '../../styles/componentStyles/navbar.scss'
import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

import { userIsAuthenticated } from '../../helpers/authHelp'

import logo from  '../../assets/Logo.png'


const NavBar = () => {

  const location = useLocation()
  useEffect(() => {

  }, [location.pathname])

  const history = useHistory()
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="Doodle Logo" className="second-logo"></img>
          </Link>
        </div>
        <div className="navbar-start">
          <Link to="/profile" className="navbar-item">Profile</Link>
          <Link to="/doodle-new" className="navbar-item">Doodle</Link>
          <Link to="/gallery" className="navbar-item">Gallery</Link>
        </div>
        <div className="navbar-end">
          { !userIsAuthenticated() &&
        <>
          <Link to="/join" className="navbar-item">
            Sign Up
          </Link>

          <Link to="/login" className="navbar-item">
            Login
          </Link>
        </>
          }
          { userIsAuthenticated() &&
        <>
          <div className="navbar-item" onClick={handleLogout}>
            Logout
          </div>
        </>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar
