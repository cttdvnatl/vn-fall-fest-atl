import React from 'react';
import { useTranslation, setLanguage, getLanguage } from 'react-multi-lang';

const Header = () => {

    const displayNone = {
        display : 'none',
    }

    const displayBlock = {
        display : 'block',
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
        displayVN = displayBlock;
    }
    else if (getLanguage() + '' === 'vn'){
        displayVN = displayNone;
        displayEN = displayBlock;
    }

    //making top header disappear after 1 scroll
    document.addEventListener("scroll", () => {
        document.documentElement.dataset.scroll = window.scrollY;
    });
    
    document.documentElement.dataset.scroll = window.scrollY;

    return (
        <>
        <nav class="desktop-view">
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
                <ul>
                    <div class="logo"><a href="/"><img alt="logo" src="https://fallfestivalatl.org/wp-content/uploads/2021/06/2021-LHMT-Logo-Dark-FF-72.png"></img></a></div>
                    <li><a href="/">{t('header.dropdownOne.heading')}</a></li>
                    <li><a href="/events">{t('header.dropdownTwo.heading')}</a></li>
                    <li><a href="/food-menu">{t('header.dropdownThree.heading')}</a></li>
                    <li><a href="/other">{t('header.dropdownFour.heading')}</a></li>
                </ul>
            </div>
        </nav>
        
        <nav class="mobile-view">
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

        </nav>
        </>
    )
}

export default Header;