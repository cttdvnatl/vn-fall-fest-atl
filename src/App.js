import React, { useCallback, useRef, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {
  setLanguage,
  getLanguage,
  setTranslations,
  setDefaultLanguage,
} from "react-multi-lang";
import ReactGA from "react-ga4";

//database imports
import en from "./2022/database/en.json";
import vn from "./2022/database/vn.json";

//Route imports
import { Route2022 } from "./routes/Route2022";
import { Route2023 } from "./routes/Route2023";

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
      <Router>
        <Routes>
          <Route path="/*" element={<Route2023/>}/>
          <Route path="/2022/*" element={<Route2022/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
