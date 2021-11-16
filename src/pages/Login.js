import React from 'react'
import LoginForm from '../components/loginForm'
import Container from 'react-bootstrap/Container'
const Login = () => {
    return (
        <Container className="text-center bg-dark w-25 p-3 my-4 rounded" >
            <h2 className="text-light mb-3">Login</h2>
            <LoginForm />
        </Container>
    )
}

export default Login
