import React, {useRef} from 'react';
import { useTranslation, setLanguage, getLanguage } from 'react-multi-lang';

const Header = () => {

    const displayNone = {
        display : 'none',
    }

    const vn = useRef(null)
    const en = useRef(null)

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

    function buttonChange() {
        if (document.readyState === "complete") {
            if (getLanguage() + '' == 'en') {
                en.current.style.display = 'none';
                vn.current.style.display = 'block';
            }
            else if (getLanguage() + '' == 'vn'){
                vn.current.style.display = 'none';
                en.current.style.display = 'block';
            }
        }
    }

    return (
        <>
            <div class="top-header">
                <div class="top-header-items">
                    <div class="back-to-main">
                        <a href="https://www.hvmatl.org">Back to main site</a>
                    </div>
                    <div class="translation-button">
                        <button onclick={buttonChange()} ref={vn} style={{display: 'block'}} id="vn" class="translation-button" onClick={() => setLanguageVN()}>Tiếng Việt</button>
                        <button onclick={buttonChange()} ref={en} style={{display: 'block'}} id="en" class="translation-button" onClick={() => setLanguageEN()}>English</button>                
                    </div>
                </div>
            </div>        
            <nav>
                <ul>
                    <li>{t('header.dropdownOne.heading')}</li>
                    <li>{t('header.dropdownTwo.heading')}</li>
                    <li>{t('header.dropdownThree.heading')}</li>
                    <li>{t('header.dropdownFour.heading')}</li>
                </ul>
            </nav>
        </>
    )
}

export default Header;