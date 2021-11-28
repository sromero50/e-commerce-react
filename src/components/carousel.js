import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/esm/Container'
export const CarouselComponent = () => {
    return (
        <Container fluid>
        <Carousel className="carousel my-3">
            
            <Carousel.Item>
                <img
                    style={{width:"auto", height:"400px"}}
                    className="d-block w-100"
                    src="https://dummyimage.com/900x300/d4bed4/edfaf0.png&text=For+sale"
                    alt="First slide"
                />
                <Carousel.Caption>
                  
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                 style={{width:"auto", height:"400px"}}
                    className="d-block w-100"
                    src="https://dummyimage.com/900x300/91b4b5/edfaf0.png&text=For+sale"
                    alt="Second slide"
                />

                <Carousel.Caption>
                   
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                 style={{width:"auto", height:"400px"}}
                    className="d-block w-100"
                    src="https://dummyimage.com/900x300/bdd4bd/edfaf0.png&text=For+sale"
                    alt="Third slide"
                />

                <Carousel.Caption>
                   
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    )
}
