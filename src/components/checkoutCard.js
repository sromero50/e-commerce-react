import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Btn from "../components/button";

const CheckoutCard = (props) => {

const {datos} = props

return (
   
    <Card style={{ width: '20rem', margin: "auto" }} className="text-center mt-3" bg="dark" text="light" >
    <Card.Header style={{ whiteSpace: 'pre-wrap' }}>
      {datos.name}
    </Card.Header>
    <Card.Body>
      <Card.Text  >
          {datos.price}
      </Card.Text>
      <Btn url={"/"} text={"Confirm"} />
    </Card.Body>
  </Card>
   
    )



}

export default CheckoutCard