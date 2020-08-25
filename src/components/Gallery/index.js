import React from 'react';
import WebList from '../WebList';

function Gallery({ currentCategory }) {
    //const { name, description } = currentCategory;
    return (
        <section id='gallery'>
        <h2 className="header-text">Gallery</h2>
        <WebList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;