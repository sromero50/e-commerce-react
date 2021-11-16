import React, { useState, useEffect }  from "react";
import Product from "./Product"
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/esm/Container";
import firebase from '../Config/firebase'
const ProductsList = () => {

  const [products, setProducts] = useState([]);
  useEffect(
    () => {
      async function request() {
        try {
          const querySnapshot = await firebase.db.collection("productos")
            .get()
          if (querySnapshot.docs) {
            setProducts(querySnapshot.docs)

          }
        } catch (error) {
          console.log("error", error)
        }
      }
      request()

    }, []
  )
  
  return <>{products.map(product => <Product datos={{...product.data(), id:product.id}} />)}</>




}

export default ProductsList
