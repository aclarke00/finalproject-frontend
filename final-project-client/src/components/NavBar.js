import React from 'react';
import {NavLink} from 'react-router-dom'


const NavBar = (props) => {
  
  return (

    <ul className="nav">
    
      <li>
        <NavLink to="/">Home</NavLink>
      </li>


      <li>
      <NavLink to="/explore">Explore Trees</NavLink>
      </li>

      <li>
        <NavLink to="/register">Create an Account</NavLink>
      </li>

      <li>
        <NavLink  to="/profile">Profile</NavLink>
      </li>

      { localStorage.token ?
        <>
      <li>
        <NavLink to="/login" onClick={props.handleLogout}>Log Out</NavLink>
      </li>
        </>
        :
        <>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
        </>

      }
    </ul>

  )
};

export default NavBar;