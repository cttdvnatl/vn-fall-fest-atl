import React from 'react';
import SlideShowImages from './SlideShowImages';
import slidecontent from '../database/slidesshow.js';

const slides = slidecontent;

const SlideShow = () => {
    return (
        <>
        <div class="slideshow-container">
            <SlideShowImages list={slides} />
        </div>
        </>
    )
}

export default SlideShow;