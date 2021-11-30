import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/esm/Container';
const Footer = () => {

    const icons = {
        color: "white"
    }
    return (<Navbar style={{ padding: "2px", margintop: "3px" }} bg="dark" variant="dark" className="footer" fixed="bottom" expand="lg">
            <Container >
            <Nav style={{marginLeft: "630px"}} >

                <span className="ms-5" style={{ fontWeight: "lighter", color: "white" }} >Copyright 2021</span>


            </Nav>
            
            </Container>
            
                    <Nav.Link className="text-dark" href="#"><FontAwesomeIcon style={icons} icon={faTwitterSquare} /></Nav.Link>
                    <Nav.Link  className="text-dark" href="#"><FontAwesomeIcon style={icons} icon={faFacebookSquare} /></Nav.Link>
                    <Nav.Link className="text-dark" href="#"><FontAwesomeIcon style={icons} icon={faInstagram} /></Nav.Link>

                
    </Navbar>
    )
}

export default Footer
