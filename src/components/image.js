import React from 'react'
const Image = (props) => {
    return (
        <div>
            <img src={props.photo} alt="..." className="images"/>
        </div>
    )
}

export default Image;
