import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';

const SponsorsList = (list) => {
    return (
        <>
        {list.data.map((sponsorList) => (
            <div class='sponsor'>
                <h1>{sponsorList.mainSponsors}</h1>
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
            <p>stuff</p>
            <SponsorsList data={Data}/>
        </div>
        </>
    )
}

export default Sponsors;