import React from 'react'
import './customButton.styles.css'

const CustomButton = (props)=>{
    return (
        <button className="customBtn">{props.name}</button>
    )
}

export default CustomButton