import React from 'react';

import './body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'



const BodyWorking = (props) => {
   console.log(props);
    const { img, month, name, programming, see, title, Min
        , beginners, date, id, titleImage } = props.products
    const doubleClick=props.doubleClick
    const MarkRead=props.MarkRead
    console.log(doubleClick);
    
    return (
        <div className='bodyTwoDevided'>
            <div>
                <div >
                    <img className='img' src={img} alt="" />
                </div>
                <div className='alignThreeSection'>
                    <div className='aligntwo'>
                        <div className='align'>
                            <img className='borderImage' src={titleImage} alt="" />
                        </div>
                        <div>
                            <h3>{name}</h3>
                            <p className='p'>{month} {date}({see} Days Ago)</p>
                        </div>
                    </div>

                    <div>
                        <p className='p'>{Min} min read <span className='faBookmark' onClick={()=> doubleClick(props.products)}>
                        <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        
                        </p>
                    </div>
                </div>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <p className='p'>#{beginners} #{programming} Id:{id}</p>
                </div>
                <div>
                    <a className='hello' onClick={()=>{MarkRead(props.products)}} href="#">Mark as read</a>
                </div>
            </div>


        </div>

    );
};

export default BodyWorking;