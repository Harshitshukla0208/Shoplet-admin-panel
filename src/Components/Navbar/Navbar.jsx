import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import navprofile from '../../assets/nav-profile.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={navlogo} alt="" />
                <p>Shoplet-admin</p>
            </div>
            <img src={ navprofile } alt="" className='nav-profile' />
        </div>
    )
}

export default Navbar
