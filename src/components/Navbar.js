import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import AuthContext from '../Context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ListGroup from 'react-bootstrap/ListGroup'
const Menu = () => {
    return (
        <><AuthContext.Consumer>
            {
                context =>
                    <>

                        <Navbar fixed="top" className="navbar" bg="dark" variant="dark">
                            <Container>
                                <Navbar.Brand as={Link} to="/home" >Shop</Navbar.Brand>
                                <Nav className="m-start">
                                    <Nav.Link href="#">Products</Nav.Link>
                                    <Nav.Link href="#">On sale</Nav.Link>
                                    <Nav.Link href="#">Contact </Nav.Link>
                                    <Nav.Link href="#"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                                    {context.login && <>
                                
                                        <Nav.Link as={Link} to="/products/alta">Register product</Nav.Link>
                                        <NavDropdown title={<FontAwesomeIcon icon={faShoppingCart} />} id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1"><ListGroup.Item>Cras justo odio</ListGroup.Item></NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2"><ListGroup.Item>Cras justo odio</ListGroup.Item></NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3"><ListGroup.Item>Cras justo odio</ListGroup.Item></NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#">Welcome {context.info.nombre}</Nav.Link>
                                        <Nav.Link onClick={() => context.logoutUser()}>Logout</Nav.Link>
                                    </>
                                    }
                                    {!context.login && <>

                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                                    </>
                                    }

                                </Nav>
                            </Container>
                        </Navbar>

                    </>
            }

        </AuthContext.Consumer>
        </>
    )
}

export default Menu
