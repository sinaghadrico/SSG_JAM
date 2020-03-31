import React from 'react'

import { Link } from 'gatsby'

import { navbarItems } from '../../utils/constant/navbar.data'

import './navbar.css'

const Navbar = () => (

    <div className='navbar'>
        <div className='navbar-header'>
            <Link to='/' id='link'>
                <h3 id='title' >{navbarItems.NAVBAR_TITLE}</h3>
            </Link>
        </div>
        <p id='desc'>{navbarItems.NAVBAR_DESC}</p>
    </div>
)

export default Navbar;