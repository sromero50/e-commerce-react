import React, { useState, useEffect, useContext }  from "react";
import Product from "./Product"
import firebase from '../Config/firebase'
import Loading from "./loading";
import AuthContext from "../Context/authContext";
const ProductsList = () => {
  const auth = useContext(AuthContext)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  console.log(useContext(AuthContext))
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
