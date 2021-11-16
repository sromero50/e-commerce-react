import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import firebase from '../../Config/firebase'
import { useForm } from "react-hook-form"
export const AltaProducto = () => {

  const {register, handleSubmit, formState:{errors}} = useForm();

  const [form, setForm] = useState({ name: '', price: '', description: ''})

  const onSubmit = async (data) => {
      console.log(data)
    try {
      const document = await firebase.db.collection("productos")
      .add(data)
      console.log(document)
    }catch(error){
      console.log('error', error)
    
     
    }
  }

const handleChange = (event) => {
  const name = event.target.name
  const value = event.target.value
  setForm({ ...form, [name]: value })
}

return (
<Container className="text-center bg-dark w-25 p-3 my-4 rounded">
<h2 className="text-light mb-3">Add product</h2>
  <form action="" id="register" name="formRegister" onSubmit={handleSubmit(onSubmit)} >
    <Form.Control className="mb-3" type="text"  {...register("name")} name="name" placeholder="Name" onChange={handleChange} required />
    <Form.Control className="mb-3" type="text"  {...register("price")} name="price" placeholder="Price" onChange={handleChange} required />
    <Form.Control className="mb-3" type="text"  {...register("description")} name="description" placeholder="Description" onChange={handleChange} required />
    <Button variant="warning" type="submit" value="save">Save</Button>
  </form>
  </Container>
)
}
