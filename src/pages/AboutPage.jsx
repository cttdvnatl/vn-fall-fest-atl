import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
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

const AboutPage = () => {
    useTranslation()

    const t = useTranslation()

    let ParagraphData;
    let LogoData;

    if (getLanguage() === 'vn') {
        ParagraphData = vn.about.paragraphs;
        LogoData = vn.about.logos;
    }
    else if (getLanguage() === 'en') {
        ParagraphData = en.about.paragraphs;
        LogoData = en.about.logos;
    }
    
    return (
        <>
        <div class="about">
            <div class="left">
                <h1>{t('about.title.text1')}</h1>
                <Paragraphs data={ParagraphData}/>
            </div>
            <div class="right">
            <h1>{t('about.title.text2')}</h1>
                <Logos data={LogoData}/>
            </div>
        </div>
        </>
    )
}

export default AboutPage;