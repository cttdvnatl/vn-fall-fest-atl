import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';
import SlideShow from '../components/SlideShow';
import Sponsors from '../components/Sponsors'
import PhotoGallery from '../components/PhotoGallery';

const Homepage = () => {
    useTranslation();

    let photoGalleryData;

    if (getLanguage() === 'vn') {
        photoGalleryData = vn.photoGalleries.galleryOne;
    }
    else if (getLanguage() === 'en') {
        photoGalleryData = en.photoGalleries.galleryOne;
    }

    return (
        <>
        <SlideShow/>
        <Sponsors/>
        <PhotoGallery data={photoGalleryData}/>
        </>
    )
}

export default Homepage;