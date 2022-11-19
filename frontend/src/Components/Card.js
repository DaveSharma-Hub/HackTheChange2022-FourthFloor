import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.scss';


function Card({data}){
    const history = useNavigate();
    
    const percent = (parseFloat(data.progress)/parseFloat(data.total))*100;
    const percentString = percent.toString().split('.')[0]
    console.log(percent);
    return(
        <div className='card'>
            <div className='itemimg'>
                <img src = {data.img}></img>
            </div>
            <div className='description'>
                <h1>
                    {data.description}
                </h1>
            </div>
            <div className="progress">
                <div className='progressbar'>
                    <div class="wrap-circles">
                        <div class="circle" style={{backgroundImage: `conic-gradient(#B5838D ${percentString}%, #FFCDB2 0)`}}>
                            <div class="inner">{percentString}%</div>
                        </div>
                    </div>
                </div>
                <div className='progresstext'>
                    <h1>
                        ${data.progress} raised
                    </h1>
                    {/* <h1>
                    • 
                    </h1> */}
                    <hr />
                    <h1>
                    ${data.total} goal
                    </h1>
                </div>
            </div>
            <button className='donate' onClick={()=>{history('')}}>Donate Here</button>
        
        </div>
    )
}

export default Card;