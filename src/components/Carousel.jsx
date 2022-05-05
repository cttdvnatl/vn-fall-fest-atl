import React, {useState} from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';

const CarouselList = ({list}) => {
    const [currentImage, setImage] = useState(0);
    const { length } = list;

    const nextSlide = () => {
        setImage(currentImage === length - 1 ? 0 : currentImage + 1);
    }

    const prevSlide = () => {
        setImage(currentImage === 0 ? length - 1 : currentImage - 1);
    }

//    setTimeout(() => {
//        setSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
//    }, 3000)

    return (
        <>
        {list.map((carousel, index) => (
            <div class={index === currentImage ? "slides active" : "slides"} key={carousel.title} aria-hidden={index !== currentImage} style={{}}>
                    <div class="slide-overlay-left" onClick={prevSlide}></div>
                    <div class="slide-overlay-right" onClick={nextSlide}></div>
                    <img alt={carousel.imageNumber} src={carousel.image}></img>
                    <div class="filler"/>
            </div>
        ))}
        </>
    )
}

const Carousel = () => {
    useTranslation();

    let Data;

    if (getLanguage() === 'vn') {
        Data = vn.carousel;
    }
    if (getLanguage() === 'en') {
        Data = en.carousel;
    }

    return (
        <>
        <div class="slideshow-container">
            <CarouselList list={Data} />
        </div>
        </>
    )
}

export default Carousel;