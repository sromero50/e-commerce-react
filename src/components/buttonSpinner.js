import React from 'react'
import {Button, Spinner} from 'react-bootstrap'

const ButtonSpinner = (props) => {
    return (
      <Button onClick={props.function} className={props.class} type={props.type} variant={props.variant} disabled={props.loading}>
          {
              props.loading &&
              <Spinner animation="border" variant="dark" ></Spinner>
          }
        {props.children}
      </Button>
    )
}

export default ButtonSpinner
