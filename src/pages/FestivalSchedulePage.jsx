import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';

const FestivalSchedule = (list) => {
    return (
        <>
        {list.data.map((section, index) => (
            /*
            <div class="schedule" key={index}>
                <p class="day">Day: {section.day}</p>
                {section.content.map((schedule, idx) => (
                    <div class="event" key={idx}>
                        <p class="time">{schedule.time}</p><p class="description">{schedule.description}</p>
                    </div>
                ))}
            </div>*/
            <div class="schedule" key={index}>
                <img src={section.image} alt={section.image}></img>
            </div>
        ))}
        </>
    )
}


const FestivalSchedulePage = () => {
    useTranslation()

    let Data;

    if (getLanguage() === 'vn') {
        //Data = vn.festivalSchedule.schedule2;
        Data = vn.festivalSchedule.schedule1;
    }
    else if (getLanguage() === 'en') {
        //Data = en.festivalSchedule.schedule2;
        Data = en.festivalSchedule.schedule1;
    }

    return (
        <>
        <div class="festival-schedule-page">
        <h1>Festival Schedule</h1>
            <FestivalSchedule data={Data}/>
        </div>
        </>
    )
}

export default FestivalSchedulePage;