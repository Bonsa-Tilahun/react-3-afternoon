import React from 'react'
import './controlls.styles.css'
import CustomButton from '../CustomButton/CustomButton.component'
const Controlls = (props)=>{
    return(
        <div className="controlls-container">
            <div className='controlls-previous'>
                {props.index !== 1?
                    <h6 onClick={props.prev}> Previous </h6>:
                null
                }
            </div>
            <div className='controlls-middle'>
                <CustomButton name={`Edit`}/>
                <CustomButton name={`Delete`}/>
                <CustomButton name={`New`}/>
            </div>
            <div className='controlls-next'>
                {props.index !== props.total ?
                    <h6 onClick={props.next}>Next</h6>:
                null
                }
            </div>
        </div>
    )
}

export default Controlls