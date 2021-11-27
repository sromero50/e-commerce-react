import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import CheckoutCard from '../components/checkoutCard'
import firebase from '../Config/firebase'
import Loading from '../components/loading'

const Checkout = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      async function request() {
        try {
          const response = await firebase.db.doc("productos/" + id)
            .get()
          if (response) {
            setProduct(response)
            setLoading(false)
          }
        } catch (error) {
          console.log("error", error)
        }
      }
      request()

    }, [id]
  )

  return (
    <Loading active={loading} >
      {
        product &&
        <CheckoutCard datos={product.data()} />
       
      }
    </Loading>
  )

}


export default Checkout