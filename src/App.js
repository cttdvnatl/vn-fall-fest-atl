import React from 'react';
import './css/style.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {setLanguage, getLanguage, setTranslations, setDefaultLanguage} from 'react-multi-lang';

//database imports
import en from './database/en.json';
import vn from './database/vn.json';

//conponent imports
import Header from './components/Header';
import Footer from './components/Footer';

//page imports
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FestivalSchedulePage from './pages/FestivalSchedulePage';
import MusiciansPage from './pages/MusiciansPage';
import ContestPage from './pages/ContestPage';
import RafflesPage from './pages/RafflesPage';
import MenuPage from './pages/MenuPage';
import VendorsPage from './pages/VendorsPage'
import SponsorsPage from './pages/SponsorsPage';
import ContactPage from './pages/ContactPage';
import DirectionsPage from './pages/DirectionsPage';
import DonationsPage from './pages/DonationsPage';

//Error/Success Pages
import FormSubmitSuccessPage from './pages/FormSubmitSuccessPage';
import FormSubmitErrorPage from './pages/FormSubmitErrorPage';

//Website Cookie for Language
setTranslations({vn, en})
setDefaultLanguage('vn')

function checkLangCookie() {
    const language = getCookie("language");
    if (language === 'en') {
        setLanguage('en');
    } else if (language === 'vn') {
        setLanguage('vn');
    } else {
        setLangCookie();
    }
}

function setLangCookie() {
    document.cookie = "language = " + getLanguage();
}

function getCookie(cookieParam) {
    const cookieName = cookieParam + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
}

checkLangCookie()

//Changes Document Title based on language
getLanguage() === 'en' ? document.title = "Vietnamese Fall Festival" : document.title = "Lễ Hội Mùa Thu"

function App() {
    return (
        <>
        <Header/>
            <Router>
                <Route path="/" component={HomePage} exact/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/festival-schedule" component={FestivalSchedulePage}/>
                <Route path="/musicians" component={MusiciansPage}/>
                <Route path="/contests" component={ContestPage}/>
                <Route path="/raffles" component={RafflesPage}/>
                <Route path="/menu" component={MenuPage}/>
                <Route path="/vendors" component={VendorsPage}/>
                <Route path="/sponsors" component={SponsorsPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/form-success" component={FormSubmitSuccessPage}/>
                <Route path="/form-error" component={FormSubmitErrorPage}/>
                <Route path="/directions" component={DirectionsPage}/>
                <Route path="/donations" component={DonationsPage}/>
            </Router>
        <Footer/>
        </>
    );
}

export default App;
