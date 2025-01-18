import React from 'react'
// import { NavLink } from 'react-router-dom'
import './Navbar.css'

interface NavbarProps {
  user: any; 
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Home
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          {user ? (
            <>
              {user.emailVerified ? (
                <>
                  <li>
                  <a href="/pickems">Pickems</a>
                  </li>
                  <li>
                  <a href="/admin">Admin</a>
                  </li>
                  <li>
                    <a href="/user">User</a>
                  </li>
                </>
              ) : (
                <li>
                  <a href="/user">User</a>
                </li>
              )}
            </>
          ) : (
            <>
            <li>
              <a href="/signup">Signup</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            </>
          )}
        </ul>
      </div>
    </nav>


  //     <nav className="navbar navbar-light">
  //   <div className="container">
  //     <NavLink className="navbar-brand" to="/" end>
  //       conduit
  //     </NavLink>
  //     <ul className="nav navbar-nav pull-xs-right">
  //       <li className="nav-item">
  //         <NavLink to="/" end>
  //           Home
  //         </NavLink>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>
  )
}

export default Navbar;