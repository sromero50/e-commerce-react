import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import firebase from '../Config/firebase';
import ButtonSpinner from './buttonSpinner';
import { useHistory } from "react-router-dom"
export const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const { push } = useHistory()
  const [form, setForm] = useState({ name: '', surname: '', email: '', password: '', passwordConfirm: '' })

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.password == form.passwordConfirm) {
      setLoading(true)
      let email = form.email;
      let password = form.password
      let surname = form.surname
      let name = form.name
      try {
        const responseUser = await firebase.auth.createUserWithEmailAndPassword(email, password)
        console.log('user', responseUser.user.uid)
        if (responseUser.user.uid) {
          const document = await firebase.db.collection("usuarios")
            .add({
              userId: responseUser.user.uid,
              nombre: name,
              surname: surname,
              email: email,
              password: password
            })
            setLoading(false)
            push('/login')
          console.log('document', document)
          setLoading(true)
          if (document) {
            setLoading(false)
          }
        }
      } catch (error) {
        setLoading(false)
        console.log('error', error.code)
        if (error.code == "auth/email-already-in-use") {
          alert('Email already in use, try another one')
        }
      }
    }else {
      alert("Passwords must match!")
    }


  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form, [name]: value })
  }

  return (
    <form action="" id="register" name="formRegister" onSubmit={handleSubmit} >
      <Form.Control className="mb-3 form-control border rounded" type="text" value={form.name} name="name" placeholder="Name" onChange={handleChange} required />
      <Form.Control className="mb-3 form-control border rounded" type="text" value={form.surname} name="surname" placeholder="Surname" onChange={handleChange} required />
      <Form.Control className="mb-3 form-control border rounded" type="email" value={form.email} name="email" placeholder="Email" onChange={handleChange} required />
      <Form.Control className="mb-3 form-control border rounded" type="password" value={form.password} name="password" placeholder="Password" onChange={handleChange} required />
      <Form.Control className="mb-3 form-control border rounded" type="password" value={form.passwordConfirm} name="passwordConfirm" placeholder="Confirm password" onChange={handleChange} required />
      <ButtonSpinner loading={loading} type={"submit"} variant={"warning"} >{loading == false ? "Sign up" : null}</ButtonSpinner>

    </form>
  )
}
