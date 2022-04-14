import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "../../../Images/icon/logo-black.png";
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="secondary" variant="dark">
        <Container>
        <Navbar.Brand as={Link}  to="/"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link}  to="/">Home</Nav.Link>
            <Nav.Link as={Link}  to="/services">Services</Nav.Link>
            <Nav.Link as={Link}  to="/experts">Experts</Nav.Link>
            <Nav.Link as={Link}  to="/about">About</Nav.Link>
            <Nav.Link as={Link}  to="/login">Login</Nav.Link>
            <Nav.Link as={Link}  to="/reviews">Reviews</Nav.Link>
           
          </Nav>
        
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;

