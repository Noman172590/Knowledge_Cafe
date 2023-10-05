import React from 'react';
import './BookmarkDetalies.css'

const BookmarkDetalies = (props) => {
    console.log(props.title);
    return (
        <div className='childBookmark'>
            <h2>{props.title}</h2>
        </div>
    );
};

export default BookmarkDetalies;