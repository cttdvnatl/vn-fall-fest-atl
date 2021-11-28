import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';

const SponsorsList = (list) => {
    return (
        <>
        {list.data.map((section, index) => (
            <div class={section.class} key={index}>
                <h1>{section.title}</h1>
                {section.content.map((sponsorContent, idx) => (
                    <div key={idx}>
                        <img src={sponsorContent.img} alt={sponsorContent.img}></img>
                    </div>
                ))}
            </div>
        ))}
        </>
    )
}

const Sponsors = () => {
    useTranslation()

    let Data;

    if (getLanguage() === 'vn') {
        Data = vn.sponsorList;
    }
    if (getLanguage() === 'en') {
        Data = en.sponsorList;
    }
    
    return (
        <>
        <div class="sponsors">
            <SponsorsList data={Data}/>
        </div>
        </>
    )
}

export default Sponsors;