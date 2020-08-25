import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helper';
import WebList from '../WebList';

function Gallery({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
        <section id='gallery'>
        <WebList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;