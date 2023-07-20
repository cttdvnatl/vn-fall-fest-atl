import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import en from '../database/en';

const FooterItems = (list) => {
    return (
        <>
        {list.data.map((section, index) => (
            <div class={section.footerSection} key={index}>
                <h1>{section.header}</h1>
                {section.content.map((footerContent, idx) => (
                    <>
                        <p>{footerContent.nonLink}</p><a href={footerContent.link} key={idx}>{footerContent.linkName}</a>
                    </>
                ))}
            </div>
        ))}
        </>
    )
}

export const Footer = () => {
    useTranslation()

    let Data;
    
    if (getLanguage() === 'en') {
        Data = en.footer;
    }

    return (
        <>
        <div class="footer-component">
            <div class="footer-img">
                    <img alt="logo" src="http://www.hvmatl.net/gallery/LHMT_img/LHMT2022/Logos/LogoSucSongMoi.png"/>
            </div>
            <FooterItems data={Data}/>
        </div>
        </>
    )
}