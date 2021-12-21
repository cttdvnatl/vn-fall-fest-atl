import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';

const Musicians = (list) => {
    return (
        <>
        {list.data.map((musicians) => (
            <div class="musician">
            <img src={musicians.img} alt={musicians.img}/>
            <h1>{musicians.name}</h1>
            <p>{musicians.caption}</p>
            </div>
        ))}
        </>
    )
}

const MusiciansPage = () => {
    useTranslation()

    let Data;

    if (getLanguage() === 'vn') {
        Data = vn.musicians;
    }
    else if (getLanguage() === 'en') {
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

export default MusiciansPage;