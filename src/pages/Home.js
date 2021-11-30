import React from 'react'
import ProductsList from '../components/ProductsList'
import { CarouselComponent } from '../components/carousel';
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/esm/Container";

const Home = () => {

const style={
  width: "1000px",
   height: "200px"
}

  return (<Container  >
    <CarouselComponent style={style}/>
    <Container className="productosHome" style={{ marginTop: '10px' }}><Row xs={1} md={4} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <ProductsList key={idx} />
      ))}
    </Row>
    </Container>
  </Container>

  )
}

export default Home
