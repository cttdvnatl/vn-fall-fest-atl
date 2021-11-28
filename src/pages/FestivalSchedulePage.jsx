import React from 'react';


/*import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';

const FestivalSchedule = (list) => {
    return (
        <>
        {list.data.map((section, index) => (
            <div class="schedule" key={index}>
                <p class="day">Day: {section.day}</p>
                {section.content.map((schedule, idx) => (
                    <div class="event" key={idx}>
                        <p class="time">{schedule.time}</p><p class="description">{schedule.description}</p>
                    </div>
                ))}
            </div>
        ))}
        </>
    )
}


const FestivalSchedulePage = () => {
    useTranslation()

    let Data;

    if (getLanguage() === 'vn') {
        Data = vn.festivalSchedule;
    }
    if (getLanguage() === 'en') {
        Data = en.festivalSchedule;
    }

    return (
        <>
        <div class="festival-schedule">
        <h1>Festival Schedule</h1>
        <FestivalSchedule data={Data}/>
        </div>
        </>
    )
}
*/

const FestivalSchedulePage = () => {
    return (
        <>
        <iframe title="festival-schedule" src="" style={{width: "100%", height: "700px"}}/>
        </>
    )
}


export default FestivalSchedulePage;