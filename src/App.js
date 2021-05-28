import React from 'react';
import './css/style.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {setLanguage, getLanguage, setTranslations, setDefaultLanguage} from 'react-multi-lang';
import en from './database/en.json';
import vn from './database/vn.json';
import HomePage from './pages/HomePage';

//Website Cookie for Language
setTranslations({vn, en})
setDefaultLanguage('en')

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

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage}/>
    </Router>
  );
}

export default App;
