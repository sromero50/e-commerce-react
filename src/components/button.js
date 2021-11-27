import React from 'react'
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button'
const Btn = (props) => {


    return (


           <Button href={props.url}  variant="warning" size="lg" style={{margin:"3px" }}>{props.text}</Button >


    )
}

export default Btn
