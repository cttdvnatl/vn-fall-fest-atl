import React from 'react';
import { getLanguage, useTranslation } from 'react-multi-lang';
import en from '../database/en.json';

const Raffles = (list) => {
    return (
        <>
        {list.data.map((raffles) => (
            <div class="raffle">
                <h1>{raffles.title}</h1>
                <p>{raffles.info}</p>
                <img src={raffles.img} alt={raffles.img} />
            </div>
        ))}
        </>
  )
}

export const RafflesPage = () => {
    
    useTranslation()

    let RafflesData;

    if (getLanguage() === 'en') {
        RafflesData = en.raffles;
    }

    return (
        <>
        <div class="raffles-page">
            <Raffles data={RafflesData}/>
        </div>
        </>
    )
} 