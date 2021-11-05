import React, {useState} from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';

const Slides = ({list}) => {
    const [currentSlide, setSlide] = useState(0)
    const { length } = list

    const nextSlide = () => {
        setSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)  
        console.log(currentSlide)
    }

    const prevSlide = () => {
        setSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
        console.log(currentSlide)
    }

    

//    setTimeout(() => {
//        setSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
//    }, 3000)

    
    return (
        <>
            <div class="slide-overlay-left" onClick={prevSlide}></div>
            <div class="slide-overlay-right" onClick={nextSlide}></div>
        {list.map((slides, index) => (
            <div class={index === currentSlide ? "slides active" : "slides"} key={slides.title} aria-hidden={index !== currentSlide} style={{}}>
                <img alt={slides.slideNumber} src={slides.slide}></img>
            </div>
        ))}
        </>
    )
}

const SlideShow = () => {
    useTranslation()

    let Data;

    if (getLanguage() === 'vn') {
        Data = vn.slides;
    }
    if (getLanguage() === 'en') {
        Data = en.slides;
    }

    return (
        <>
        <div class="slideshow-container">
            <Slides list={Data} />
        </div>
        </>
    )
}

export default SlideShow;