import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import firebase from "../../Config/firebase"
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button'
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form'
import { useHistory } from "react-router-dom"
import Loading from '../../components/loading';
import ButtonSpinner from '../../components/buttonSpinner';
const EditProduct = () => {
  const { id } = useParams()

  const { push } = useHistory()

  const [loading, setLoading] = useState(true);
  const [loadSpinner, setLoadSpinner] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form, [name]: value })
  }


  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [form, setForm] = useState({ name: '', price: '', description: '', img: '', sku: '' })

  const onSubmit = async (data) => {
    setLoadSpinner(true)
    console.log(data)
    try {
      const document = await firebase.db.doc("productos/" + id)
        .set(data)
      setLoadSpinner(false)
      console.log(document)
      push('/home')
    } catch (error) {
      setLoadSpinner(false)
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
            setLoading(false)
            setValue("name", response.data().name)
            setValue("price", response.data().price)
            setValue("description", response.data().description)
            setValue("img", response.data().img)
            setValue("sku", response.data().sku)
          }
        } catch (error) {
          console.log("error", error)
        }
      }
      request()

    }, [id]
  )

  const handleDelete = async () => {
    setLoadSpinner(true)
    try {
      const response = await firebase.db.doc("productos/" + id)
        .delete()
      setLoadSpinner(false)
      console.log(response)
      push('/home')

    } catch (error) {
      console.log("error", error)
    }
  }



  return (<Loading active={loading} ><>
    <Container className="text-center bg-light w-25 p-4 my-5 login rounded">
      <h3 className="text-dark my-3 display-5">Edit product</h3>

      <form action="" id="register" name="formRegister" className="mt-4" onSubmit={handleSubmit(onSubmit)} >
        <Form.Control className="mb-3 form-control border rounded" type="text"  {...register("name")} name="name" placeholder="Name" onChange={handleChange} required />
        <Form.Control className="mb-3 form-control border rounded" type="text"  {...register("price")} name="price" placeholder="Price" onChange={handleChange} required />
        <Form.Control className="mb-3 form-control border rounded" type="text"  {...register("img")} name="img" placeholder="Image" onChange={handleChange} required />
        <Form.Control className="mb-3 form-control border rounded" type="text"  {...register("sku")} name="sku" placeholder="Sku" onChange={handleChange} required />
        <Form.Control className="mb-3 form-control border rounded" type="text"  {...register("description")} name="description" placeholder="Description" onChange={handleChange} required />
        <div className="row">
          <ButtonSpinner class={"col mx-3"} loading={loadSpinner} type={"submit"} variant={"success"} >{loadSpinner == false ? "Save" : null}</ButtonSpinner>
          <ButtonSpinner class={"col mx-3"} loading={loadSpinner} variant={"danger"} function={() => handleDelete()} >{loadSpinner == false ? "Delete" : null}</ButtonSpinner>
        </div>
      </form>
    </Container>
  </></Loading>)

}

export default EditProduct
