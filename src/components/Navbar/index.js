import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import logo from "../../images/logo.svg";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" width="180" height="180" />
        </NavLink>

        <NavMenu>
          <NavLink to="/quiz" activeStyle>
            <span className="bold">Quiz</span>
          </NavLink>
          <NavLink to="/about" activeStyle>
            <span className="bold">Reviews</span>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
