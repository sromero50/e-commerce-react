import React, { useState, useEffect }  from "react";
import Product from "./Product"
import firebase from '../Config/firebase'
import Loading from "./loading";
const ProductsList = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(
    () => {
      async function request() {
        try {
          const querySnapshot = await firebase.db.collection("productos")
            .get()
          if (querySnapshot.docs) {
            setProducts(querySnapshot.docs)
            setLoading(!loading)
          }
        } catch (error) {
          console.log("error", error)
        }
      }
      request()

    }, []
  )



return (<Loading active={loading}>{products.map(product => <Product key={product.id} datos={{...product.data(), id:product.id}} />)}</Loading> )
  
  




}

export default ProductsList
