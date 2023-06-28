import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
//import GetExternalApi from '../functions/GetExternalApi';
import vn from '../database/vn';
import en from '../database/en';

const Paragraphs = (list) => {
    return (
        <>
        {list.data.map((paragraph) => (
            <div class="paragraph">
                <p>{paragraph.text}</p>
            </div>
        ))}
        </>
    )
}

const Logos = (list) => {
    return (
        <div class="logo">
        {list.data.map((logo) => (
            <img src={logo.src} alt={logo.year}/>
        ))}
        </div>
    )
}

const Poster = (list) => {
    return (
        <div class="poster-container">
            {list.data.map((poster, index) => (
                <img src={poster.src} alt={index} class="poster"/>
            ))}
        </div>
    )
}

export const AboutPage = () => {
    //const en = GetExternalApi('http://localhost:8080/getjson/en.json')
    //const vn = GetExternalApi('http://localhost:8080/getjson/vn.json')
    console.log(en)
    useTranslation()

    const t = useTranslation()

    let ParagraphData;
    let LogoData;
    let PosterData;

    if (getLanguage() === 'vn') {
        ParagraphData = vn.about.paragraphs;
        LogoData = vn.about.logos;
        PosterData = vn.about.posters;
    }
    else if (getLanguage() === 'en') {
        ParagraphData = en.about.paragraphs;
        LogoData = en.about.logos;
        PosterData = en.about.posters;
    }
    
    return (
        <>
        <div class="about">           
            <div>
                <div class="left">
                    <h1>{t('about.title.text1')}</h1>
                    <Paragraphs data={ParagraphData}/>
                </div>

                <Poster data={PosterData}/>

                <div class="right">
                    <h1>{t('about.title.text2')}</h1>
                    <Logos data={LogoData}/>
                </div>
            </div>           
        </div>
        </>
    )
}

export default AboutPage;