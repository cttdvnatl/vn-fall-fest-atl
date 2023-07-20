import React from 'react';
import { useTranslation, getLanguage } from 'react-multi-lang';
import en from '../database/en';

const IconList = (list) => {
    return (
        <>
        {list.data.map((socialIcons) => (
            <>
            <div class="icon">
                <a href={socialIcons.link} target="_blank" rel="noopener noreferrer">
                    <img src={socialIcons.image} alt={socialIcons.image} />
                </a>
            </div>
            </>
        ))}
        </>
    )
}

const SocialIcons = () => {
    useTranslation()

    let Data;

    if (getLanguage() === 'en') {
        Data = en.socialIcons;
    }

    return (
        <>
        <div class="social-icons-component">
            <IconList data={Data}/>
        </div>
        </>
    )
} 

export default SocialIcons;