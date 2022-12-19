import { useState } from 'react';
import { dataTwo } from './dataTwo';
import './App.css'

function About (){

const [photo, setPhoto]=useState(0);
const {image, text}=dataTwo[photo];
const [showMore, setShowMore]=useState(false);

const previosPortait=()=>{
    setPhoto((photo=>{
        photo --;
        if (photo <0){
            return dataTwo.length -1;
        }
        return photo;
    }))
}
const nextPortait =()=>{
    setPhoto((photo=>{
        photo++;
        if (photo > dataTwo.length -1){
            photo =0;
        }
        return photo;
    }))
}
    return (
    <div>
        <div className='cont'>
            <h1 className="backTwo">Author's collection from DIANA ROSE</h1>
        </div>
        <div className='cont'>
            <button className='Btn' onClick={previosPortait}>Prev</button><img className="slideImg" src={image} width="800px" height="450vh" alt="shop"/><button className="Btn" onClick={nextPortait}>Next</button> 
        </div>
        <div className='cont'>
<p className='Text'>{showMore ? text : text.substring(0, 100) + "..."}
<button className='btn' onClick={()=> setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
</p>
        </div>
    </div>
    )
}
export default About;