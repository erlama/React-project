import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <Navbar className="nav-clear" expand="sm">
        <Nav className="nav-navbar">
          <Link className="nav-link nl" to="#">Nyheter</Link>
          <Link className="nav-link nl" to="#">Katagorier</Link>
          <Link className="nav-link nl" to="#">Topplistan</Link>
          <Link className="nav-link nl" to="#">Rea</Link>
          <Link className="nav-link nl" to="#">Kampanjer</Link>
          <Link className="nav-link nl" to="#">Varumärken</Link>
          <Link className="nav-link nl" to="#">Shop</Link>
          <Link className="nav-link nl" to="#">Instagram</Link>
          <Link className="nav-link nl" to="/details">Details page</Link>
        </Nav>
    </Navbar>
)
export default NavBar;