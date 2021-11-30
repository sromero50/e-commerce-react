import React from 'react'
import LoginForm from '../components/loginForm'
import Container from 'react-bootstrap/Container'
const Login = () => {
    return (
        <Container className="text-center login bg-light w-25 p-5 my-5 border border-light rounded" >
            <h2 className="text-dark mb-3 display-5">Login</h2>
            <LoginForm />
        </Container>
    )
}

export default Login
