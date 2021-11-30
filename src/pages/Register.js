import React from 'react'
import { RegisterForm } from '../components/registerForm'
import Container from 'react-bootstrap/Container'
const Register = () => {

    
    return (
        <Container className="text-center login bg-light w-25 p-5 my-5 border border-light rounded display-5" >
            <h2 className="text-dark mb-3">Sign up</h2>
            <RegisterForm />
        </Container>
    )
}

export default Register
