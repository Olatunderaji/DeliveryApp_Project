import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWallet, faAddressBook, faBoxesPacking, faBoxOpen, faUser, faCircleQuestion, faNewspaper, faBook, faClipboardList } from "@fortawesome/free-solid-svg-icons"
import '../App.css'
import { NavLink } from 'react-router-dom'

const Sidebar = ({children}) => {
    const menuItems = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <FontAwesomeIcon icon={faNewspaper}/>
        },
        {
            path: '/myshipment',
            name: 'My Shipment',
            icon: <FontAwesomeIcon icon={faClipboardList} />
        },
        {
            path: '/myship',
            name: 'My Shop & Ship Orders',
            icon: <FontAwesomeIcon icon={faClipboardList} />,
        },
        {
            path: '/wallet',
            name: 'Wallet',
            icon: <FontAwesomeIcon icon={faWallet} />
        },
        {
            path: '/pendingcharges',
            name: 'Pending Charges',
            icon: <FontAwesomeIcon icon={faWallet}/>
        },
        {
            path: '/myaddresses',
            name: 'My Addresses',
            icon: <FontAwesomeIcon icon={faAddressBook}/>
        },
        {
            path: '/invite&earn',
            name: 'Invite & Earn',
            icon: <FontAwesomeIcon icon={faBoxOpen} />,
        },
        {
            path: '/guidesresources',
            name: 'Guides & Resources',
            icon: <FontAwesomeIcon icon={faBook} />,
        },
        {
            path: 'faqs',
            name: 'FAQs',
            icon: <FontAwesomeIcon icon={faCircleQuestion}/>
        },
        {
            path: 'profile',
            name: 'Profile',
            icon: <FontAwesomeIcon icon={faUser}/>
        },
       ]
  return (
    <div className="mycontainer">
        <div className="sidebar">
            <div className="top_section">
                <h1 className='logo'>Logo</h1>
                <div className="bars">
                <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className="scrolldown">
            {menuItems.map((item, index)=>(
                 <NavLink to={item.path} key={index} className="link">
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
                 </NavLink>
                ))}
                </div>
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar