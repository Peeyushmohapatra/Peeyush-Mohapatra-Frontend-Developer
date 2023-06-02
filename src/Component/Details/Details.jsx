import React, { useEffect, useState } from 'react'
import "./Details.css"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { capsuleArr } from '../../Function/function';

const Details = () => {
    const {id} = useParams()
    const [state,setState] = useState('')
    const data = useSelector((state) => {
        return state.capsule
    });

    useEffect(() => {
        setState(data.filter((ele) => {
            if(ele.capsule_serial === id){
                return ele
            }
        } ))
    },[])
    console.log(capsuleArr[Math.floor(Math.random()*10)]);
  return (
    <div style={{backgroundImage:`url(${capsuleArr[Math.floor(Math.random()*10)]})`}} className='details'>
        <div className="overlayy">
            <div className="detailsContainer">
            {state && state.map((ele) => {
            return (
                <>
                <p style={{display:"flex",gap:"10px"}}><b className='label label1'>Capsule-Id: </b> <p className='p newP'>{ele.capsule_id}</p></p>
                <p><b className='label label1'>Capsule Serial Number: </b> <span className='p newP'>{ele.capsule_serial}</span></p>
                <p><b className='label label1'>Number of Landing: </b> <span className='p newP'>{ele.landings}</span></p>
                <p><b className='label label1'>Number of Launch: </b> <span className='p newP'>{ele.original_launch}</span></p>
                <p><b className='label label1'>Number of Mission: </b> <span className='p newP'>{ele.missions.length}</span></p>
                <p><b className='label label1'>Capsule Status:  </b> <span className='p newP'>{ele.status}</span></p>
                <p><b className='label label1'>Capsule Version:  </b> <span className='p newP'>{ele.type}</span></p>
                <p><b className='label label1'>Details: </b> <span className='p newP'>{ele.details}</span></p>
                </>

            )
        })}
            </div>
        </div>
    </div>
  )
}

export default Details