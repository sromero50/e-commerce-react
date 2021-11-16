import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/esm/Container'
export const CarouselComponent = () => {
    return (
        <Container>
        <Carousel className="carousel my-3">
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dummyimage.com/600x400/000000/0011ff&text=Oferta"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Oferta 1</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dummyimage.com/600x400/000000/0011ff&text=Oferta"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Oferta 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dummyimage.com/600x400/000000/0011ff&text=Oferta"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Oferta 3</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    )
}
