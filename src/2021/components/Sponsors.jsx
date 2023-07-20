import React, {useRef} from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import en from '../database/en';

const MainSponsor = (list) => {
    return (
        <div class="left">
        {list.data.map((section, index) => (
            <div class={section.class + '-container'} key={index}>
            <h1>{section.title}</h1>
                <div class={section.class}>
                    <img src={section.img} alt={section.img}></img>
                </div>
            </div>
        ))}
        </div>
    )
}

const OtherSponsors = (list) => {
    let sponsors = useRef(null);
    
    return (
        <div class="right">
            {list.data.map((section, index) => (
                <div class={section.class + '-container'} ref={sponsors} key={index}>
                    {/*<button onClick={() => executeScroll(10)}>LEFT</button>
                    <button onClick={() => executeScroll(-10)}>RIGHT</button>*/}
                    <h1>{section.title}</h1>               
                    
                    <div class={section.class}>
                        {section.content.map((sponsorContent, idx) => (
                            <div class="sponsor-image" key={idx}>
                                <img className="1" src={sponsorContent.img} alt={sponsorContent.img}></img>
                            </div>
                        ))}
                        {section.content.map((sponsorContent, idx) => (
                            <div class="sponsor-image" key={idx}>
                                <img class="1" src={sponsorContent.img} alt={sponsorContent.img}></img>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

const Sponsors = () => {
    useTranslation()

    let mainSponsorData;
    let otherSponsorsData;

    if (getLanguage() === 'vn') {
        mainSponsorData = vn.sponsorList.mainSponsor;
        otherSponsorsData = vn.sponsorList.otherSponsors;
    }
    if (getLanguage() === 'en') {
        mainSponsorData = en.sponsorList.mainSponsor;
        otherSponsorsData = en.sponsorList.otherSponsors;
    }
    
    return (
        <>
        <div class="sponsors">
            <MainSponsor data={mainSponsorData}/>
            <OtherSponsors data={otherSponsorsData}/>
        </div>
        </>
    )
}

export default Sponsors;


/*
import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';
import ImageGallery from 'react-image-gallery';

const MainSponsor = (list) => {
    return (
        <div class="left">
            {list.data.map((section, index) => (
                <div class={section.class + '-container'} key={index}>
                    <h1>{section.title}</h1>

                    <div class={section.class}>
                        <img src={section.img} alt={section.img}></img>
                    </div>
                </div>
            ))}
        </div>
    )
}

const OtherSponsors = (list) => {
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/'
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/'
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/'
        },
    ];

    const state = {
        autoPlay: true,
        thumbnailPosition: 'top',
        showThumbnails: false,
        showFullscreenButton: false,
        showPlayButton: false,
        slideInterval: 2500,
        slideDuration: 0,
        showBullets: true,
        showNav: false
    }

    return (
        <div class="right">
            {list.data.map((section, index) => (
                <div key={index}>
                    <h1>{section.title}</h1>

                    <ImageGallery 
                        items={section.content} 
                        autoPlay={state.autoPlay} 
                        showThumbnails={state.showThumbnails}
                        showFullscreenButton={state.showFullscreenButton}
                        showPlayButton={state.showPlayButton}
                        slideInterval={state.slideInterval}
                        slideDuration={state.slideDuration}
                        showBullets={state.showBullets}
                        showNav={state.showNav}
                    />
                </div>
            ))}
        </div>
    )
}

const Sponsors = () => {
    useTranslation()

    let mainSponsorData;
    let otherSponsorsData;

    if (getLanguage() === 'vn') {
        mainSponsorData = vn.sponsorList.mainSponsor;
        otherSponsorsData = vn.sponsorList.otherSponsors;
    }
    if (getLanguage() === 'en') {
        mainSponsorData = en.sponsorList.mainSponsor;
        otherSponsorsData = en.sponsorList.otherSponsors;
    }
    
    return (
        <>
        <div class="sponsors">           
            <MainSponsor data={mainSponsorData}/>
            <OtherSponsors data={otherSponsorsData}/>
        </div>
        </>
    )
}

export default Sponsors;
*/