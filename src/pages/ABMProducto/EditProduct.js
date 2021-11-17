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


const {register, handleSubmit, formState:{errors}, setValue} = useForm();
const [form, setForm] = useState({ name: '', price: '', description: ''})

const onSubmit = async (data) => {
  setLoadSpinner(true)
    console.log(data)
  try {
    const document = await firebase.db.doc("productos/"+id)
    .set(data)
    setLoadSpinner(false)
    console.log(document)
    push('/home')
  }catch(error){
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
        console.log(response)
        push('/home')
        
    } catch (error) {
      console.log("error", error)
    }
  }
  const handleSpinner = () => {
    setLoadSpinner(!loadSpinner)
  }

 
    return (<Loading active={loading} ><>
      <Container className="text-center bg-dark w-25 p-3 my-4 rounded">
      <h3 className="text-light mb-3">Edit product</h3>
      
        <form action="" id="register" name="formRegister" onSubmit={handleSubmit(onSubmit)} >
          <Form.Control className="mb-3" type="text"  {...register("name")} name="name" placeholder="Name" onChange={handleChange} required />
          <Form.Control className="mb-3" type="text"  {...register("price")} name="price" placeholder="Price" onChange={handleChange} required />
          <Form.Control className="mb-3" type="text"  {...register("description")} name="description" placeholder="Description" onChange={handleChange} required />
         <div className="row">
         <ButtonSpinner class={"col mx-3"} loading={loadSpinner} type={"submit"} variant={"success"} >{loadSpinner == false ? "Save" : null }</ButtonSpinner>
         {/* <ButtonSpinner function={()=> handleDelete() } class={"col mx-3"} loading={loadSpinner} type={"submit"} variant={"danger"} >{loadSpinner == false ? "Delete" : null }</ButtonSpinner> */}
         {/* <Button variant="warning" type="submit" value="save" onClick={handleSpinner}  className="col mx-3">{loadSpinner == false ? "Save" : (<span class="sr-only spinner-border" />) }  </Button> */}
         <Button variant="danger" onClick={()=> {handleSpinner() ; handleDelete() } } className="col mx-3" >{loadSpinner == false ? "Delete" : (<span class="sr-only spinner-border" />) }  </Button>
         </div>
        </form>
      </Container>
    </></Loading> )
  
}

export default EditProduct
