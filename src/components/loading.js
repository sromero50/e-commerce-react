import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
const Loading = (props) => {
    const {active} = props

    
    return (<>{active == true ? (<div className="d-flex justify-content-center mt-3 spinner"> <Spinner animation="border" variant="warning" /></div>) : (<>{props.children}</>)}</>)
    
}

export default Loading
