import React from 'react'
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements'
const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink> 
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About Us   
                </NavLink>    
                <NavLink to="/quiz" activeStyle>
                    Quiz   
                </NavLink>
            </NavMenu> 
        </Nav>
        </>
    )
}

export default Navbar;
