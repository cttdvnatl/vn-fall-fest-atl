import React, {useRef, useCallback, useEffect} from 'react';
import { useTranslation, setLanguage, getLanguage } from 'react-multi-lang';

const Header = () => {

    const nav = useRef(null);
    const sideNav = useRef(null);
    const mainHeader = useRef(null);

    const displayNone = {
        display : 'none',
    }

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
    const scrollCallback = useCallback(() => {
        const sticky = mainHeader.current.offsetTop;
        if (window.pageYOffset > sticky) {
            mainHeader.current.classList.add("is-sticky");
        } else {
            mainHeader.current.classList.remove("is-sticky");
      }
    }, []);

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
        window.addEventListener("scroll", scrollCallback);
        //Unhook the event handlers when the element is unmounted
        return () => {
            window.removeEventListener("scroll", scrollCallback);
            window.removeEventListener("resize", resizeCallback);
        };
    }, [resizeCallback, scrollCallback]);

    function openSideNav() {
        if(window.innerWidth < 950) {
            sideNav.current.classList.remove("closeSideNav");
            sideNav.current.classList.add("openSideNav");
        }
    }
    function closeSideNav() {
        sideNav.current.classList.remove("openSideNav");
        sideNav.current.classList.add("closeSideNav");
    }

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
            <div ref={mainHeader} class="main-header">
            <div class="logo"><a href="/"><img alt="logo" src="https://fallfestivalatl.org/wp-content/uploads/2021/06/2021-LHMT-Logo-Dark-FF-72.png"></img></a></div>
                <ul ref={sideNav} class="closeSideNav">
                    <span onClick={() => closeSideNav()}>&#10005;</span>
                    <li><p>{t('header.dropdownOne.heading')}</p>
                        <ul>
                            <li><a href="/item1">{t('header.dropdownOne.item1')}</a></li>
                            <li><a href="/item2">{t('header.dropdownOne.item2')}</a></li>
                        </ul>
                    </li>

                    <li><p>{t('header.dropdownTwo.heading')}</p>
                    <ul>
                            <li><a href="/item1">{t('header.dropdownTwo.item1')}</a></li>
                            <li><a href="/item2">{t('header.dropdownTwo.item2')}</a></li>
                        </ul>
                   </li>

                    <li><p>{t('header.dropdownThree.heading')}</p>
                        <ul>
                            <li><a href="/item1">{t('header.dropdownThree.item1')}</a></li>
                            <li><a href="/item2">{t('header.dropdownThree.item2')}</a></li>
                        </ul>
                    </li>

                    <li><p>{t('header.dropdownFour.heading')}</p>
                        <ul>
                        </ul> 
                    </li>
                </ul>
                <span onClick={() => openSideNav()} class="mobile-icon">&#8801;</span>
            </div>
        </nav>
        </>
    )
}

export default Header;