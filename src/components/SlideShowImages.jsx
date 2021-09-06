import React from 'react'
import slides from '../database/slidesshow';

const displayBlock = {
    display: "block"
}

const displayNone = {
    display: "none"
}

let displayStyle;

let slideNumber = 1;
let amountOfSlides = document.getElementsByClassName("slides").length;

function slideChange(n) {
    slideNumber = n

    if (slideNumber > amountOfSlides) {
        slideNumber = 1
    }
    else if (slideNumber < 1) {
        slideNumber = amountOfSlides + 1;
    }

    document.getElementsByClassName("slides")[slideNumber].style = displayBlock;
}
slideChange(slideNumber)

const SlideShowImages = ({list}) => (
    <>
    {list.map((slides) => (
        <div class="slides" style={{displayStyle}}>
            <img alt="slide" src={slides.slide}></img>
        </div>
    ))}
    </>
)

export default SlideShowImages;