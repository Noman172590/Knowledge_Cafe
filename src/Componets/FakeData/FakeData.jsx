import { useEffect, useState } from 'react';
import BodyWorking from '../body/body';
import './FakeData.css'
import SlideBar from '../slideBar/SlideBar';


const FakeData = () => {
    const [card, cardUse] = useState([])
    const [Item, setItem] = useState([])
    const [MarkasRead, setMarkasRead] = useState([])

    useEffect(() => {
        fetch("/public/Fake.json")
            .then(res => res.json())
            .then(data => cardUse(data))
    }, [])
    
    const doubleClick=(props)=>{
        const newCart=[...Item,props]
        setItem(newCart)
    }
    const MarkRead=(props)=>{
        const newCart=[...MarkasRead,props]
     
        setMarkasRead(newCart)
    }
    return (
        <div className='Mapproduct'>
          <div>
             {
                
                card.map(products => <BodyWorking
                    key={products.id}
                    products={products}
                    doubleClick={doubleClick}
                    MarkRead={MarkRead}
                    >
                    
                </BodyWorking>)
             }
            
            </div>  
            <div className='slideBar'>
                
               <SlideBar Item={Item} MarkasRead={MarkasRead}></SlideBar>
            </div>
           
        </div>
    );
};

export default FakeData;