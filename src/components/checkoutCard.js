import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Btn from "../components/button";

const CheckoutCard = (props) => {

const {datos} = props

return (
   
  <div className="p-5 mb-4 bg-light rounded border w-50 container mt-3 text-center">
  <h1  className="display-5 fw-bold">{datos.name}</h1>
    <img alt="..." src={datos.img} style={{width: "100%"}} />
      
     
   
      <h2 style={{fontSize: "40px", fontWeight: "lighter"}} >$ {datos.price}</h2>
     

      <Btn size={"lg"} url={"/home/"} text={"Confirm"} />
  
</div>
   
    )



}

export default CheckoutCard