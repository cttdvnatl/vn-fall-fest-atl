import React, {useState} from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';

const CarouselList = ({list}) => {
    const [currentImage, setImage] = useState(0);
    const { length } = list;

/*    const nextSlide = () => {
        setImage(currentImage === length - 1 ? 0 : currentImage + 1);
    }

    const prevSlide = () => {
        setImage(currentImage === 0 ? length - 1 : currentImage - 1);
    }
*/

    const carouselTimeout =
        setTimeout(() => {
            setImage(currentImage === length - 1 ? 0 : currentImage + 1);
        }, 3000)
    
    if (carouselTimeout === 1) { //To prevent React alert for not using variables
        return `1`;
    }

    return (
        <>
        {list.map((carousel, index) => (
            <div class={index === currentImage ? "carousel active" : "carousel"} key={carousel.title} aria-hidden={index !== currentImage} style={{}}>
        {/*
                <div class="carousel-overlay-left" onClick={prevSlide}></div>
                <div class="carousel-overlay-right" onClick={nextSlide}></div>
        */}
                <img alt={carousel.imageNumber} src={carousel.image}></img>
            </div>
        ))}
        <img alt="filler" class="filler" src="http://www.hvmatl.net/gallery/LHMT_img/LHMT2022/Carousel/LHMT2022Invite.png"/>
        {/*<div>
            <li onClick={ () => {
                    clearTimeout(carouselTimeout);
                    setImage(0);
                    clearTimeout(carouselTimeout);
                }
            }
            ></li>
            <li onClick={ () => {
                    clearTimeout(carouselTimeout);
                    setImage(1);
                    clearTimeout(carouselTimeout);
                }
            }
            ></li></div>*/}
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
        <div class="carousel-container">
            <CarouselList list={Data}/>
        </div>
        </>
    )
}

export default Carousel;