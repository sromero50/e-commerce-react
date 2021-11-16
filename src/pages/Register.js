import React from 'react'
import { RegisterForm } from '../components/registerForm'
import Container from 'react-bootstrap/Container'
const Register = () => {

    
    return (
        <Container className="text-center bg-dark w-25 p-3 my-4 rounded" >
            <h2 className="text-light mb-3">Sign up</h2>
            <RegisterForm />
        </Container>
    )
}

export default Register
