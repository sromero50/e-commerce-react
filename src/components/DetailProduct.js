import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const DetailProduct = (props) => {
  const history = useHistory()
  const { datos } = props

  return (
    
    <div className="w-75 border rounded border-light p-3 mt-5 m-auto bg-light singleProduct" >
      <div className="row">
        <div className="col d-flex justify-content-center">
          <img alt="..." src={datos.img} className="picture " style={{ width: "100%" }} />
        </div>
        <div className="col text-center">
          <h1 className="display-5 fw-bold">{datos.name}</h1>
          <h4 style={{ fontSize: "30px", fontWeight: "lighter" }} className="text-center my-3">{datos.description}</h4>
          <span style={{ fontSize: "15px", fontWeight: "lighter" }} className="my-3" >{datos.sku}</span>
          <h2 className="mt-5" style={{ fontSize: "40px", fontWeight: "lighter" }} >$ {datos.price}</h2>

          <div className="mt-5 container">
          <button style={{ fontSize: "30px", fontWeight: "lighter" }} className="btn btn-dark btn-block w-100 my-2">
             Add to cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button onClick={()=> history.push("/checkout/" + datos.id)} style={{ fontSize: "30px", fontWeight: "lighter" }} className="btn btn-warning btn-block w-100">
             Buy 
            </button>

            
          </div>


        </div>

      </div>




    </div>

  )



}

export default DetailProduct
