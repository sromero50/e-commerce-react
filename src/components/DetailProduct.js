import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Btn from "../components/button";
import Col from 'react-bootstrap/Col'
import Quantity from "./quantity";

const DetailProduct = (props) => {

const {datos} = props

return (
   
    <Card style={{ width: '20rem', margin: "auto" }} className="text-center mt-3" bg="dark" text="light" >
      <Card.Header style={{ whiteSpace: 'pre-wrap' }}>
        {datos.name}
      </Card.Header>
      <Card.Body>
      <Quantity />
        <Card.Text>
          {datos.description}
        </Card.Text>
        <Card.Text  >
            {datos.price}
        </Card.Text>
        <Card.Text  >
            SKU: 123123532
        </Card.Text>
        <Btn url={"/checkout/" + datos.id} text={"Buy"} />
      </Card.Body>
    </Card>
   
    )



}

export default DetailProduct
