import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
const Header = () => {
  return (
    <div className='Header'>
  
      <div>
      <li className='logo'><Link to="/">LOGO</Link></li>

      </div>
      <div className='Header_Menu'>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/EmployeeList">Employee List</Link></li>
        <li><Link to="/Login">LogIn</Link></li>
        <li><Link to="/Signin">SignIn</Link></li>
        
      </div>
    </div>
  )
}

export default Header
