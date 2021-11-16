import React from 'react'
import Card from 'react-bootstrap/Card'
const Name = (props) => {
    return (
        <Card.Header style={{ whiteSpace: 'pre-wrap' }}>
           {props.name}
        </Card.Header>
    )
}

export default Name
