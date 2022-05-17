import React from 'react';
import { getLanguage, useTranslation } from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';
import Carousel from '../components/Carousel';
import Sponsors from '../components/Sponsors';
import PhotoGallery from '../components/PhotoGallery';
import FestivalStatistics from '../components/FestivalStatistics';

// temporari component to put a video here.
// check with An Pham on where to put this as a generic component
// and where to put the CSS
// for now, the CSS for this is temporarily in homepage.css
const VideoResponsive = () => (
    <div className="video-responsive">
        <video width="750" height="500" controls autoPlay muted loop>
            <source
                src="/resources/pages/home/Promo.mp4"
                type="video/mp4"
            />
        </video>
    </div>
);

const Homepage = () => {
    useTranslation();

    let photoGalleryDataOne;
    let photoGalleryDataTwo;

    if (getLanguage() === 'vn') {
        photoGalleryDataOne = vn.photoGalleries.galleryOne;
        photoGalleryDataTwo = vn.photoGalleries.galleryTwo;
    }
    else if (getLanguage() === 'en') {
        photoGalleryDataOne = en.photoGalleries.galleryOne;
        photoGalleryDataTwo = en.photoGalleries.galleryTwo;
    }

    return (
        <>
            <Carousel />
            <Sponsors />
            <VideoResponsive />
            <PhotoGallery data={photoGalleryDataOne} />
            <PhotoGallery data={photoGalleryDataTwo} />
            <FestivalStatistics />
        </>
    )
}

export default Homepage;