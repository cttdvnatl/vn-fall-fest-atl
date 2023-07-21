import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn'
import en from '../database/en';

const Donations = (list) => {
    return (
        <>
        <div class="donations-link-container">
        {list.data.map((donation) => (
            <>
            <a href={donation.link}>
                <img src={donation.image} alt={donation.image}/>
            </a>
            </>
        ))}
        </div>
        </>
    )
}

export const DonationsPage = () => {
    const t = useTranslation();

    let Data;

    if (getLanguage() === 'vn') {
        Data = vn.donations.content;
    }
    else if (getLanguage() === 'en') {
        Data = en.donations.content;
    }

    return (
        <>
        <div class="donations-page">
            <h1>{t('donations.pageTitle')}</h1>
            <p>{t('donations.text')}</p>
            <Donations data={Data} />
        </div>
        </>
    )
}
