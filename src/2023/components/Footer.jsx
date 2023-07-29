import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
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

    if (getLanguage() === 'vn') {
        Data = vn.footer;
    }
    if (getLanguage() === 'en') {
        Data = en.footer;
    }

    return (
        <>
        <div class="footer-component">
            <div class="footer-img">
                    <img alt="logo" src="https://hvmatl.com/gallery/LHMT_img/LHMT2023/Logos/2023logo.png"/>
            </div>
            <FooterItems data={Data}/>
        </div>
        </>
    )
}