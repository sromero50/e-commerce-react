import React,{useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import firebase from '../Config/firebase';

const LoginForm = () => {
  const [form, setForm] = useState ({email:'', password:''})
  
  const handleSubmit = async (event) =>{
    event.preventDefault()
    let email = form.email;
    let password = form.password
    try{
      const responseUser = await firebase.auth.signInWithEmailAndPassword(email, password)
      if(responseUser.user.uid){
        const userInfo = await firebase.db.collection("usuarios")
        .where("userId", "==", responseUser.user.uid)
        .get()
        console.log("userInfo" ,userInfo)
      }
    }catch(error){
      console.log('error', error.code)
    }
  }
  
  const handleChange = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setForm({...form,[name]:value})
  }
  
  
    return (
        <form action="" id="login" name="loginForm" onSubmit={handleSubmit} >
        <Form.Control className="mb-3"  type="email" value={form.email} name="email" placeholder="Email"  onChange={handleChange} required/>
        <Form.Control className="mb-3" type="password" value={form.password} name="password" placeholder="Password" onChange={handleChange} required />
        <Button variant="warning" type="submit" value="Login">Login</Button>
      </form>
    )
}

export default LoginForm
