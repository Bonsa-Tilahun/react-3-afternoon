import React from 'react'
import './controlls.styles.css'
const Controlls = (props)=>{
    
    return(
        <div className="controlls-container">
            <div className='controlls-movement'>
                {props.index !== 0?
                    <button className='customBtn' onClick={props.prev}> Previous </button>:
                null
                }
            </div>
            <div className='controlls-middle'>
                {/* <CustomButton name={`Edit`}/>
                <CustomButton onClick={() => { props.delete(props.index)}} name={`Delete`}/>
                <CustomButton name={`New`}/> */}
                <button className='customBtn' onClick={() => { props.edit(props.index)}}>Edit</button>
                <button className='customBtn' onClick={() => { props.delete(props.index)}}>Delete</button>
                <button className='customBtn' onClick={() => { props.delete(props.index)}}>New</button>
            </div>
            <div className='controlls-movement'>

                {props.index + 1 !== props.total ?
                    <button className='customBtn' onClick={props.next}>Next</button>:
                null
                }
            </div>
        </div>
    )
}

export default Controlls