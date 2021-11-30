import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Btn from "../components/button";
import Col from 'react-bootstrap/Col'
import AuthContext from "../Context/authContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const Product = (props) => {
const history = useHistory()
const {datos} = props

return (
  <>
  <AuthContext.Consumer>{
    context =><>
    
    <Col className="mx-1 col-xs-2 mb-3 d-flex"  >
      <a  style={{textDecoration: "none"}} href={"/products/" + datos.id}>
      <Card key={datos.id} style={{ width: '18rem' }} className="text-center mb-3 flex-column product border border-light rounded" bg="light" text="dark" >
  
      <Card.Header style={{ whiteSpace: 'pre-wrap', fontSize: "90%", fontWeight: "bold"}}>
        {datos.name}
      </Card.Header>
      <Card.Img style={{objectFit: 'fill', padding: "3px", width: "auto", height: "200px" }} src={datos.img} variant="top" />
      <Card.Body >
      
 
        <Card.Text  >
          <span style={{fontSize: "30px", fontWeight: "lighter"}} >$ {datos.price}</span>
            
        </Card.Text>
 
      </Card.Body>
      <div className="form-inline mb-2">
             
       
        {context.login &&
                    <button style={{ fontSize: "20px", fontWeight: "lighter" }} className="btn btn-warning btn-block w-50">
                   <Link style={{textDecoration: "none", color: "black"}} to={"/products/edit/" + datos.id} > Edit product</Link> 
                   </button>
       
        }
        
    </div>
    </Card>
    </a>
    </Col>
    </>
    }
    
    </AuthContext.Consumer></>
    )



}

export default Product
