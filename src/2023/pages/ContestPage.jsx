import React from 'react';
import { getLanguage, useTranslation } from 'react-multi-lang';
import en from '../database/en.json';
import vn from '../database/vn.json';

const ContestList = (list) => {
    return (
        <>
        {list.data.map((contest) => (
            <div class="contest-container">
                <a href={contest.link}>{contest.formName}</a>
                <img src={contest.img} alt={contest.img}/>
           </div>
        ))}
        </>
    )
}

export const ContestPage = () => {
    useTranslation();

    const t = useTranslation()
    let contestData;

    if (getLanguage() === 'vn') {
        contestData = vn.contests;
    }
    else if (getLanguage() === 'en') {
        contestData = en.contests;
    }

    return (
        <>
        <div class="contest-page">
            <h1>{t('contests.title')}</h1>
            <ContestList data={contestData.content}/>
            <img src={contestData.img} alt={contestData.img}/>
        </div>
        </>
    )   
}

