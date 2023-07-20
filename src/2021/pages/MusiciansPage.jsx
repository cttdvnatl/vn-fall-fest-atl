import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import en from '../database/en';

const Musicians = (list) => {
    return (
        <>
        {list.data.map((musicians) => (
            <div class={musicians.style + ' musician'}>
                <img src={musicians.img} alt={musicians.img}/>
                <div class="column">
                    <h1>{musicians.name}</h1>
                    <p>{musicians.caption}</p>
                </div>
            </div>
        ))}
        </>
    )
}

export const MusiciansPage = () => {
    useTranslation()

    let Data;
    
    if (getLanguage() === 'en') {
        Data = en.musicians;
    }

    return (
        <>
        <div class="musicians">
            <Musicians data={Data}/>
        </div>
        </>
    )
} 