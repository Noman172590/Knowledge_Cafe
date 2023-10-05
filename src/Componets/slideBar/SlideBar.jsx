import React from 'react';
import './SlideBar.css'
import BookmarkDetalies from '../BookmarksDetalies/BookmarkDetalies';


const SlideBar = (props) => {
   const MarkasRead=props.MarkasRead
   console.log(MarkasRead);
    const number=props.Item
   let totalMin=0;
   for(const Min of MarkasRead)
   {
          totalMin=totalMin+Min.Min;
   }
    
    return (
        <div >
            
            <div>
            <p className='spentTime'>
            Spent time on read : {totalMin} min
            </p>
            </div>
           <div className='Box1'>
             <h1>Bookmarked Blogs : <span id='numberIncrese'>{props.Item.length}</span></h1>
           </div>
           <div className='Box'>
             {
                  number.map(numbers=><BookmarkDetalies key={numbers.id} title={numbers.title}></BookmarkDetalies>)
             }
            </div>
           
        </div>
    );
};

export default SlideBar;