import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        borderBottom: '3px solid rgb(255, 115, 0)'
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Hair<span className='main-color'>Color</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto header">
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;