import React, {useRef, useCallback, useEffect} from 'react';
import { useTranslation, setLanguage, getLanguage } from 'react-multi-lang';

const Header = () => {

    const nav = useRef(null);

    const displayNone = {
        display : 'none',
    }

    /*const displayBlock = {
        display : 'block',
    }*/

    const displayViet = {
        display: 'block',
        backgroundColor: '#ffcc00'

    }

    const displayEng = {
        display: 'block',
        backgroundColor: '#005ce6'
    }

    //Set Language and Cookie
    let displayEN = {}
    let displayVN = {}

    const t = useTranslation();

    function setLangCookie() {
        document.cookie = "language = " + getLanguage();
    }
    function setLanguageVN() {
        setLanguage('vn');
        setLangCookie('vn');
    }
    function setLanguageEN() {
        setLanguage('en');
        setLangCookie('en');
    }

    if (getLanguage() + '' === 'en') {
        displayEN = displayNone
        displayVN = displayViet;
    }
    else if (getLanguage() + '' === 'vn'){
        displayVN = displayNone;
        displayEN = displayEng;
    }

    //making top header disappear after 1 scroll
    document.addEventListener("scroll", () => {
        document.documentElement.dataset.scroll = window.scrollY;
    });
    
    document.documentElement.dataset.scroll = window.scrollY;

    //desktop to mobile view
    const resizeCallback = useCallback(() => {
        if (window.innerWidth < 950) {
            nav.current.classList.remove('desktop-view')
            nav.current.classList.add('mobile-view')
        }
        else {
            nav.current.classList.remove('mobile-view')
            nav.current.classList.add('desktop-view')
        }
    }, []);
    
    useEffect(() => {
        //Call all the callbacks to setup initial value after the element is mounted
        resizeCallback();
        window.addEventListener("resize", resizeCallback);
        //Unhook the event handlers when the element is unmounted
        return () => {
            window.removeEventListener("resize", resizeCallback);
        };
    }, [resizeCallback]);

    return (
        <>
        <nav ref={nav} class=''>
            <div class="top-header">
                <div class="top-header-items-left">
                    <div class="back-to-main">
                        <a href="https://www.hvmatl.org">Back to main site</a>
                    </div>
                </div>
                <div class="top-header-items-right">
                    <div class="translation-button">
                        <button style={displayVN} id="vn" class="translation-button" onClick={() => setLanguageVN()}>Tiếng Việt</button>
                        <button style={displayEN} id="en" class="translation-button" onClick={() => setLanguageEN()}>English</button>                
                    </div>
                </div>
            </div>        
            <div class="main-header">
            <div class="logo"><a href="/"><img alt="logo" src="https://fallfestivalatl.org/wp-content/uploads/2021/06/2021-LHMT-Logo-Dark-FF-72.png"></img></a></div>
                <ul>
                    <li><a href="/">{t('header.dropdownOne.heading')}</a>
                        <ul>
                            <li><a href="/item1">{t('header.dropdownOne.item1')}</a></li>
                            <li><a href="/item1">{t('header.dropdownOne.item2')}</a></li>
                            <li><a href="/item1">{t('header.dropdownOne.item3')}</a></li>
                        </ul>
                    </li>

                    <li><a href="/events">{t('header.dropdownTwo.heading')}</a>
                        <ul>
                            <li><a href="/item1">{t('header.dropdownOne.item1')}</a></li>
                            <li><a href="/item1">{t('header.dropdownOne.item2')}</a></li>
                            <li><a href="/item1">{t('header.dropdownOne.item3')}</a></li>
                        </ul>
                    </li>

                    <li><a href="/food-menu">{t('header.dropdownThree.heading')}</a>
                        <ul>
                            <li><a href="/item1">{t('header.dropdownOne.item1')}</a></li>
                            <li><a href="/item1">{t('header.dropdownOne.item2')}</a></li>
                            <li><a href="/item1">{t('header.dropdownOne.item3')}</a></li>
                        </ul>
                    </li>

                    <li><a href="/other">{t('header.dropdownFour.heading')}</a>
                        <ul>
                            <li><a href="/item1">{t('header.dropdownOne.item1')}</a></li>
                            <li><a href="/item1">{t('header.dropdownOne.item2')}</a></li>
                            <li><a href="/item1">{t('header.dropdownOne.item3')}</a></li>
                        </ul>
                    </li>

                    <li><a href="/other">{t('header.dropdownFive.heading')}</a>
                        <ul>
                            <li><a href="/item1">{t('header.dropdownOne.item1')}</a></li>
                            <li><a href="/item1">{t('header.dropdownOne.item2')}</a></li>
                            <li><a href="/item1">{t('header.dropdownOne.item3')}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Header;