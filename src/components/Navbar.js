import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import AuthContext from '../Context/authContext';
const Menu = () => {
    return (
        <><AuthContext.Consumer>
            {
                context =>
                <> 
                <Container fluid>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to="/home" >Home</Navbar.Brand>
                            <Nav className="m-start">
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
                </Container>
                </>
            }
            
        </AuthContext.Consumer>
        </>
    )
}

export default Menu
