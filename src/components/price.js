import React from 'react'
import Card from 'react-bootstrap/Card'
const Price = (props) => {
    return (
        <Card.Text >
            <span>${props.price}</span>
        </Card.Text>
    )
}

export default Price
