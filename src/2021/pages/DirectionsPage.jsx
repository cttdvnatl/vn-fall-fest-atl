import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import en from '../database/en';
import vn from '../database/vn'

const Direction = (list) => {
    return (
        <>
        <div class="directions-container">
        {list.data.map((section, index) => (
            <>
            <ol>
            <h2 key={index}>{section.title}</h2>
                {section.content.map((directionContent, idx) => (
                    <li key={idx}>{directionContent.instruction}</li>
                ))}
            </ol>
            </>
        ))}
        </div>
        </>
    )
}

export const DirectionsPage = () => {
    const t = useTranslation();

    let Data

    if (getLanguage() === 'vn') {
        Data = vn.directions.routes;
    }
    else if (getLanguage() === 'en') {
        Data = en.directions.routes;
    }

    return (
        <div class="directions-page">
            <h1>{t('directions.pageTitle')}</h1>
            <h4>HOLY VIETNAMESE MARTYRS CATHOLIC CHURCH</h4>
            <h4>4545 Timmers Way - Norcross ,GA 30093</h4>
            <iframe title="directions" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1689927301713!2d-84.15927998466083!3d33.93678138063755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a38e4dc6feff%3A0xa3ef814945ace642!2sHoly%20Vietnamese%20Martyrs%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1642037478380!5m2!1sen!2sus" allowfullscreen="" loading="lazy"/>
            <a href="
            https://maps.google.com/maps/dir//Holy+Vietnamese+Martyrs+Catholic+Church+4545+Timmers+Way+Norcross,+GA+30093/@33.93674,-84.1571821,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88f5a38e4dc6feff:0xa3ef814945ace642
            ">Click here for Directions</a>
            <Direction data={Data}/>
        </div>
    )
}
