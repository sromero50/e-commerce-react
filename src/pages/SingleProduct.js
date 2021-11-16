import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import DetailProduct from "../components/DetailProduct"
import firebase from '../Config/firebase'
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form'
const SingleProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

const handleChange = (event) => {
  const name = event.target.name
  const value = event.target.value
  setForm({ ...form, [name]: value })
}


const {register, handleSubmit, formState:{errors}, setValue} = useForm();
const [form, setForm] = useState({ name: '', price: '', description: ''})

const onSubmit = async (data) => {
    console.log(data)
  try {
    const document = await firebase.db.doc("productos/"+id)
    .set(data)
    console.log(document)
  }catch(error){
    console.log('error', error)
  
   
  }
}

  useEffect(
    () => {
      async function request() {
        try {
          const response = await firebase.db.doc("productos/" + id)
            .get()
          if (response) {
            setProduct(response)
            setLoading(false)
            setValue("name", response.data().name)
            setValue("price", response.data().price)
            setValue("description", response.data().description)
          }
        } catch (error) {
          console.log("error", error)
        }
      }
      request()

    }, [id]
  )

  const handleDelete = async () => {
    try {
      const response = await firebase.db.doc("productos/" + id)
        .delete()
    } catch (error) {
      console.log("error", error)
    }
  }

  if (loading) {
    return (<Container><h2>Loading...</h2></Container>)
  } else {
    return (<>
      <DetailProduct datos={product.data()} function={handleDelete} />
      <Container>
      <Link to="/"  className="btn btn-block"><Button variant="warning" onClick={handleDelete}>Delete</Button></Link>
      </Container>
      <Container>
        <form action="" id="register" name="formRegister" onSubmit={handleSubmit(onSubmit)} >
          <Form.Control className="mb-3" type="text"  {...register("name")} name="name" placeholder="Name" onChange={handleChange} required />
          <Form.Control className="mb-3" type="text"  {...register("price")} name="price" placeholder="Price" onChange={handleChange} required />
          <Form.Control className="mb-3" type="text"  {...register("description")} name="description" placeholder="Description" onChange={handleChange} required />
          <Link to="/" className="btn"> <Button variant="warning" type="submit" value="save">Save</Button></Link>
        </form>
      </Container>
    </>)
  }
}

export default SingleProduct
