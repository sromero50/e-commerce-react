import React, { useState, useEffect, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import firebase from '../Config/firebase';
import AuthContext from '../Context/authContext';
import ButtonSpinner from './buttonSpinner';
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { InputGroup } from 'react-bootstrap';
const LoginForm = () => {
  const auth = useContext(AuthContext);

  const [form, setForm] = useState({ email: '', password: '' })

  const { push } = useHistory()

  const [loadSpinner, setLoadSpinner] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoadSpinner(true)
    let email = form.email;
    let password = form.password
    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(email, password)
      if (responseUser.user.uid) {
        const userInfo = await firebase.db.collection("usuarios")

          .where("userId", "==", responseUser.user.uid)
          .get()
        setLoadSpinner(false)
        console.log(userInfo.docs[0]?.data())
        auth.loginUser(userInfo.docs[0]?.data())
        push('/home')
      }
    } catch (error) {
      setLoadSpinner(false)
      console.log('error', error.code)
      if (error.code == 'auth/wrong-password') {
        alert('Wrong password')
      }
    }
  }


  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form, [name]: value })
  }


  return (
    <form action="" id="login" name="loginForm" onSubmit={handleSubmit}  >

       <Form.Control className="mb-3 form-control border rounded" type="email" value={form.email} name="email" placeholder="Email" onChange={handleChange} required />

      

      <Form.Control className="mb-3 form-control border rounded" type="password" value={form.password} name="password" placeholder="Password" onChange={handleChange} required />
      <ButtonSpinner loading={loadSpinner} type={"submit"} variant={"warning"} >{loadSpinner == false ? "Login" : null}</ButtonSpinner>

    </form>
  )
}

export default LoginForm
