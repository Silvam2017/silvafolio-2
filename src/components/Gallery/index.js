import React from 'react';
import WebList from '../WebList';

function Gallery({ currentCategory }) {
    //const { name, description } = currentCategory;
    return (
        <section id='gallery'>
        <h2 className="header-text">Gallery</h2>
            <div className='flex-container'>
                <WebList className="flex-item" category={currentCategory.name} />
            </div>
        </section>
    );
}

export default Gallery;