import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import { NavLink } from "react-router-dom";

export default function NavBarMenu () {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <NavLink to="/" className="navbar-brand" exact>RAWG</NavLink>
            <Nav>
                <NavLink to="/" exact className="nav-link">Home</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </Nav>
        </Navbar>
    )
}