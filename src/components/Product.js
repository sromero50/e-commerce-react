import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Btn from "../components/button";
import Col from 'react-bootstrap/Col'
const Product = (props) => {

const {datos} = props

return (
  
    <Col><Card key={datos.id} style={{ width: '18rem' }} className="text-center mb-3" bg="dark" text="light" >
      <Card.Header style={{ whiteSpace: 'pre-wrap' }}>
        {datos.name}
      </Card.Header>

      <Card.Body>
        <Card.Text  >
          {datos.description}
        </Card.Text>
        <Card.Text  >
            {datos.price}
        </Card.Text>
        <Btn url={"/products/" + datos.id} text={'Details'} />
        <Btn url={"/checkout/" + datos.id} text={"Buy"} />
        <Btn url={"/products/edit/" + datos.id} text={"Edit"} />

      </Card.Body>
    </Card>
    </Col>)



}

export default Product
