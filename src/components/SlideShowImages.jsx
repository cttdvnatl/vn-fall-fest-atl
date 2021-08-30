import React from 'react'

const SlideShowImages = ({list}) => (
    <>
    {list.map((slides) => (
        <div class="slides">
            <img alt="slide" src={slides.slide}></img>
            <div class="slideText"></div>
        </div>
    ))}
    </>
)

export default SlideShowImages;