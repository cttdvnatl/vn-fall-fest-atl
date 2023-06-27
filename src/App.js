import React, { useCallback, useRef, useEffect } from "react";
import "./2022/css/style.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {
  setLanguage,
  getLanguage,
  setTranslations,
  setDefaultLanguage,
} from "react-multi-lang";
import ReactGA from "react-ga4";

//Layout imports
import { Layout2022 } from "./layouts/Layout2022";
import { Layout2023 } from "./layouts/Layout2023";

//database imports
import en from "./2022/database/en.json";
import vn from "./2022/database/vn.json";

//conponent imports
import Header from "./2022/components/Header";
import Footer from "./2022/components/Footer";

//page imports
import {HomePage} from "./2022/pages/HomePage";
import {AboutPage} from "./2022/pages/AboutPage";
import {FestivalSchedulePage} from "./2022/pages/FestivalSchedulePage";
import {MusiciansPage} from "./2022/pages/MusiciansPage";
import {ContestPage} from "./2022/pages/ContestPage";
import {RafflesPage} from "./2022/pages/RafflesPage";
import {SeminarPage} from "./2022/pages/SeminarPage";
import {MenuPage} from "./2022/pages/MenuPage";
import {VendorsPage} from "./2022/pages/VendorsPage";
import {SponsorsPage} from "./2022/pages/SponsorsPage";
import {ContactPage} from "./2022/pages/ContactPage";
import {DirectionsPage} from "./2022/pages/DirectionsPage";
import {DonationsPage} from "./2022/pages/DonationsPage";

//Error/Success Pages
import {FormSubmitSuccessPage} from "./2022/pages/FormSubmitSuccessPage";
import {FormSubmitErrorPage} from "./2022/pages/FormSubmitErrorPage";


//React-GA/Google Analytics 4
ReactGA.initialize("G-QJ9L91FVH1");
ReactGA.send("pageview");

//Website Cookie for Language
setTranslations({ vn, en });
setDefaultLanguage("vn");

function checkLangCookie() {
  const language = getCookie("language");
  if (language === "en") {
    setLanguage("en");
  } else if (language === "vn") {
    setLanguage("vn");
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
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let c = cookieArray[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cookieName) === 0) {
      return c.substring(cookieName.length, c.length);
    }
  }
}

checkLangCookie();

//Changes Document Title based on language
getLanguage() === "en"
  ? (document.title = "Vietnamese Fall Festival of Atlanta - Lễ Hội Mùa Thu")
  : (document.title = "Lễ Hội Mùa Thu - Vietnamese Fall Festival of Atlanta");



function App() {
  let body = useRef(null);

  const detectScroll = useCallback((e) => {
    if (window.scrollY > 0) {
      body.current.classList.add("sticky");
    } else {
      body.current.classList.remove("sticky");
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, [detectScroll]);
  return (
    <div className="app" ref={body}>
      <Header />
      <Router>
        <Routes>
          <Route element={<Layout2023/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/festival-schedule" element={<FestivalSchedulePage/>} />
            <Route path="/musicians" element={<MusiciansPage/>} />
            <Route path="/contests" element={<ContestPage/>} />
            <Route path="/raffles" element={<RafflesPage/>} />
            <Route path="/seminar" element={<SeminarPage/>} />
            <Route path="/menu" element={<MenuPage/>} />
            <Route path="/sponsors" element={<SponsorsPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/form-success" element={<FormSubmitSuccessPage/>} />
            <Route path="/form-error" element={<FormSubmitErrorPage/>} />
            <Route path="/directions" element={<DirectionsPage/>} />
            <Route path="/donations" element={<DonationsPage/>} />
          </Route>

          <Route element={<Layout2022/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/festival-schedule" element={<FestivalSchedulePage/>} />
            <Route path="/musicians" element={<MusiciansPage/>} />
            <Route path="/contests" element={<ContestPage/>} />
            <Route path="/raffles" element={<RafflesPage/>} />
            <Route path="/seminar" element={<SeminarPage/>} />
            <Route path="/menu" element={<MenuPage/>} />
            <Route path="/sponsors" element={<SponsorsPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/form-success" element={<FormSubmitSuccessPage/>} />
            <Route path="/form-error" element={<FormSubmitErrorPage/>} />
            <Route path="/directions" element={<DirectionsPage/>} />
            <Route path="/donations" element={<DonationsPage/>} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
