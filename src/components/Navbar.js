import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import AuthContext from '../Context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Menu = () => {
    return (
        <><AuthContext.Consumer>
            {
                context =>
                <> 
               
                    <Navbar fixed="top" className="navbar" bg="light" variant="light">
                        <Container>
                            <Navbar.Brand as={Link} to="/home" >Brand</Navbar.Brand>
                            <Nav className="m-start">
                            <Nav.Link href="#">Products</Nav.Link>
                            <Nav.Link href="#">In sale</Nav.Link>
                            <Nav.Link href="#">Contact </Nav.Link>
                            <Nav.Link href="#"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                                {context.login && <>
                                <Nav.Link href="#">Welcome {context.info.nombre}</Nav.Link>
                                <Nav.Link as={Link} to="/products/alta">Register product</Nav.Link>
                                <Nav.Link onClick={()=> context.logoutUser()}>Logout</Nav.Link>
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
