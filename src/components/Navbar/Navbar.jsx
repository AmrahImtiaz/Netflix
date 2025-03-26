import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchicon from '../../assets/search_icon.svg'
import bellicon from '../../assets/bell_icon.svg'
import dropdown from '../../assets/caret_icon.svg'
import profile from '../../assets/profile_img.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
      <img src={logo} alt="file" />
      <ul>
        <li>Home</li>
        <li>TV-Shoes</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
     </div>
     <div className="navbar-right">
      <img src={searchicon} alt="search_icon" className='icons' />
      <p>Children</p>
      <img src={bellicon} alt="search_icon" className='icons'/>
      <div className="navbar-profile">
        <img src={profile} alt="pfp" className='profile' />
        <img src={dropdown} alt="dropdown_icon" className='drop-down'/>
      <div className="dropdown">
        <p>Sign Out</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar