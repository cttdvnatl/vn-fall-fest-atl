import React from 'react';
import { getLanguage, useTranslation } from 'react-multi-lang';
import en from '../database/en.json';
import vn from '../database/vn.json';

export const SeminarPage = () => {
    
    useTranslation()

    let seminarPoster;

    if (getLanguage() === 'vn') {
        seminarPoster = vn.seminarPoster;
    }
    else if (getLanguage() === 'en') {
        seminarPoster = en.seminarPoster;
    }

    return (
        <>
            <div class="seminar-page">
                <img src={seminarPoster.img} alt={seminarPoster.img} />
            </div>
            </>
    )
} 