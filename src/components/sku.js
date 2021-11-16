import React from 'react'
import Card from 'react-bootstrap/Card'
const Sku = (props) => {
    return (
        <Card.Text>
            <span>Product code: {props.sku}</span>
        </Card.Text>
    )
}

export default Sku
