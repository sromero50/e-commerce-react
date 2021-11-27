import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Btn from "../components/button";
import Col from 'react-bootstrap/Col'
import AuthContext from "../Context/authContext";
const Product = (props) => {

const {datos} = props

return (
  <>
  <AuthContext.Consumer>{
    context =><>
    
    <Col className="mx-1 col-xs-2 mb-3 d-flex " ><Card key={datos.id} style={{ width: '18rem' }} className="text-center mb-3 flex-column" bg="dark" text="light" >
  
      <Card.Header style={{ whiteSpace: 'pre-wrap' }}>
        {datos.name}
      </Card.Header>
      <Card.Img style={{minWidth: "100%"}} variant="top" src={datos.img} />
      <Card.Body >
      
        <Card.Text  >
          {datos.description}
        </Card.Text>
        <Card.Text  >
            $ {datos.price}
        </Card.Text>
 
      </Card.Body>
      <div className="form-inline mb-2">
             <Btn className="align-self-start" url={"/products/" + datos.id} text={'Details'} />
        <Btn className="align-self-start" url={"/checkout/" + datos.id} text={"Buy"} />
        {context.login &&
        <Btn className="align-self-start" url={"/products/edit/" + datos.id} text={"Edit"} />
        }
        
    </div>
    </Card>
    </Col>
    </>
    }
    
    </AuthContext.Consumer></>
    )



}

export default Product
