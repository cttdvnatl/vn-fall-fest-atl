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
                    <h2><a href={footerContent.link} key={idx}>{footerContent.linkName}</a>{footerContent.nonLink}</h2>
                ))}
            </div>
        ))}
        </>
    )
}

const Footer = () => {
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
                <img alt="logo" src="https://fallfestivalatl.org/wp-content/uploads/2021/06/2021-LHMT-Logo-Dark-FF-72.png"/>
            </div>  
            <FooterItems data={Data}/>
        </div>
        </>
    )
}

export default Footer;