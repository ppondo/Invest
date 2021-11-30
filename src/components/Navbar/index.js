import React from 'react'
import {Nav, NavLink, NavMenu} from './NavbarElements'
import logo from '../../images/logo.svg'
const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <img src={logo} alt='logo' width="180" height="180" />
            </NavLink> 
            
            <NavMenu>   
                <NavLink to="/quiz" activeStyle>
                    <h3>Quiz</h3>   
                </NavLink>
                <NavLink to="/about" activeStyle>
                    <h3>Reviews</h3>   
                </NavLink> 
            </NavMenu> 
        </Nav>
        </>
    )
}

export default Navbar;
