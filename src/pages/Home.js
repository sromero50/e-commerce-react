import React from 'react'
import ProductsList from '../components/ProductsList'
import { CarouselComponent } from '../components/carousel';
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/esm/Container";

const Home = () => {

  return (<Container>
    <CarouselComponent />
    <Container style={{ marginTop: '10px' }}><Row xs={1} md={4} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <ProductsList />
      ))}
    </Row>
    </Container>
  </Container>

  )
}

export default Home
