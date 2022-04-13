import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
      <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand to="/home">Car website</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto nav_link">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/experts">Experts</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/about">About</Link>
      <Link to="/banner">Banner</Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    );
};

export default Header;