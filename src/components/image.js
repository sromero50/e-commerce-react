import React from 'react'
import Card from 'react-bootstrap/Card'
const Image = (props) => {
    return (
    <Card.Img variant="top" src={props.image} />
    )
}

export default Image;
