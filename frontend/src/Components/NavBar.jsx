import React from 'react'
import { NavLink } from 'react-router-dom'
import { faPowerOff, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Pages/NavBar.css'

const NavBar = ({menulist}) => {

  return (
    <div className='navContainer'>
        <h5 id='menulist'>{menulist}</h5>
        <NavLink>
            <div className='icons'>
                <FontAwesomeIcon icon={faBell} id='bell' />
                <FontAwesomeIcon icon={faPowerOff} id='poweroff'/>
                <div className="circle"><p className='circletext'>o</p></div>
            </div>
        </NavLink>
    </div>
  )
}

export default NavBar