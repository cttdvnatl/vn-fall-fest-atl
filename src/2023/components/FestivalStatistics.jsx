import React from 'react';
import {useTranslation} from 'react-multi-lang';

const FestivalStatistics = () => {
    useTranslation()

    const t = useTranslation();

    return (
        <>
        <div class="festival-statistics-component">
            <div class="statistics">
                <h2>{t('festival-statistics.headers.heading1')}</h2>
                <p>{t('festival-statistics.values.value1')}</p>
            </div>
            <div class="statistics">
                <h2>{t('festival-statistics.headers.heading2')}</h2>
                <p>{t('festival-statistics.values.value2')}</p>
            </div>
            <div class="statistics">
                <h2>{t('festival-statistics.headers.heading3')}</h2>
                <p>{t('festival-statistics.values.value3')}</p>
            </div>
            <div class="statistics">
                <h2>{t('festival-statistics.headers.heading4')}</h2>
                <p>{t('festival-statistics.values.value4')}</p>
            </div>
            <div class="statistics">
                <h2>{t('festival-statistics.headers.heading5')}</h2>
                <p>{t('festival-statistics.values.value5')}</p>
            </div>
        </div>
        </>
    )
}

export default FestivalStatistics;

/*
const FestivalStatistics = () => {
    const festivalStatistics = useRef(null);
    const Volunteer = useRef(null);
    const Day = useRef(null);

    let [volunteerCount, setVolunteerCount] = useState(0);
    let [dayCount, setDayCount] = useState(0);

    let volunteerLimit = 1000;
    let dayLimit = 3;

    function increaseVolunteers() {
        if (volunteerCount >= volunteerLimit) {
            clearTimeout(volunteerTimeout)
        }
        else {
            setVolunteerCount(volunteerCount + 5)
        }
    }

    function increaseDays() {
        if (dayCount >= dayLimit) {
            clearTimeout(dayTimeout)
        }
        else {
            setDayCount(dayCount + 1)
        }
    }


    
    let volunteerTimeout;
    let dayTimeout;
    const festivalStatisticsScrollCallback = useCallback(() => {
        const element = festivalStatistics.current.offsetTop;
        if (window.pageYOffset > element) {
            volunteerTimeout = setTimeout(
                increaseVolunteers, 
                1
            )
            dayTimeout = setTimeout(
                increaseDays,
                100
            )
        }
    }, []);

    useEffect(() => {
        //Call all the callbacks to setup initial value after the element is mounted
        window.addEventListener("scroll", festivalStatisticsScrollCallback);
        //Unhook the event handlers when the element is unmounted
        return () => {
            window.removeEventListener("scroll", festivalStatisticsScrollCallback);
        };
    }, [festivalStatisticsScrollCallback]);

    return (
        <>
        <div useRef={festivalStatistics} class="festival-statistics-component">
            <div class="statistics">
                <h2>Volunteers</h2>
                <p useRef={Volunteer}>{volunteerCount}+</p>
            </div>
            <div class="statistics">
                <h2>Days</h2>
                <p useRef={Day}>{dayCount}</p>
            </div>
            <div class="statistics">
                <h2>Professional Entertainers</h2>
                <p useRef={Volunteer}>{volunteerCount}</p>
            </div>
            <div class="statistics">
                <h2>Festival Guests</h2>
                <p useRef={Volunteer}>{volunteerCount}+</p>
            </div>
            <div class="statistics">
                <h2>Food and Drink Items</h2>
                <p useRef={Volunteer}>{volunteerCount}</p>
            </div>
        </div>
        </>
    );
};
*/