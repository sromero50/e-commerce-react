import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import CheckoutCard from '../components/checkoutCard'
import firebase from '../Config/firebase'
import Container from 'react-bootstrap/Container'
const Checkout = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([]);
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
  if (loading) {
    return (<Container><h2>Loading...</h2></Container>)
  } else {
    return (<Container>
      <CheckoutCard datos={product.data()} />
    </Container>)
  }
}


export default Checkout