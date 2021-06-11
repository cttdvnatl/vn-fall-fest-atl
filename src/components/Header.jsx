import React from 'react';
import { useTranslation, setLanguage, getLanguage } from 'react-multi-lang';

const Header = () => {

    const displayNone = {
        display : 'none',
    }

    const displayBlock = {
        display: 'block',
    }

    let displayEN = {}
    let displayVN = {}

    const t = useTranslation();
    //Set Language and Cookie
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

    return (
        <>
            <div class="top-header">
                <div class="top-header-items">
                    <div class="back-to-main">
                        <a href="https://www.hvmatl.org">Back to main site</a>
                    </div>
                    <div class="translation-button">
                        <button style={displayVN} id="vn" class="translation-button" onClick={() => setLanguageVN()}>Tiếng Việt</button>
                        <button style={displayEN} id="en" class="translation-button" onClick={() => setLanguageEN()}>English</button>                
                    </div>
                </div>
            </div>        
            <nav>
                <ul>
                    <li><a href="/">{t('header.dropdownOne.heading')}</a></li>
                    <li><a href="/events">{t('header.dropdownTwo.heading')}</a></li>
                    <li><a href="/food-menu">{t('header.dropdownThree.heading')}</a></li>
                    <li><a href="/other">{t('header.dropdownFour.heading')}</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;