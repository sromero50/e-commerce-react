import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
const Menu = () => {
    return (
        <Container fluid>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home" >Home</Navbar.Brand>
                    <Nav className="m-start">
                        <Nav.Link as={Link} to="/products/alta">Register product</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Menu
