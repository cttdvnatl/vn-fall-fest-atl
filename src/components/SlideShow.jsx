import React, {useState, useEffect} from 'react';
import slidecontent from '../database/slidesshow.js';

const Slides = ({list}) => {
    const [currentSlide, setSlide] = useState(0)
    const { length } = list



    const nextSlide = () => {
        setSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setSlide(currentSlide === length - 1 ? 0 : currentSlide - 1)
    }

    useEffect(() => {
        setTimeout(() => {
            nextSlide()
        }, 10000)
        return function() {
            clearTimeout(nextSlide);
        }
    })

    if (!Array.isArray(list) || length <= 0) {
        return null;
    }
    
    return (
        <>
        {list.map((slides, index) => (
            <div class={index === currentSlide ? "slides active" : "slides"} key={slides.title} aria-hidden={index !== currentSlide} style={{}}>
                <img alt={slides.slideNumber} src={slides.slide}></img>
            </div>
        ))}
        </>
    )
}

const SlideShow = () => {
    return (
        <>
        <div class="slideshow-container">
            <Slides list={slidecontent} />
        </div>
        </>
    )
}

export default SlideShow;