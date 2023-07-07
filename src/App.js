import React, { useCallback, useRef, useEffect, lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {
  setLanguage,
  getLanguage,
  setTranslations,
  setDefaultLanguage,
} from "react-multi-lang";
import ReactGA from "react-ga4";
import Loading from "./shared-components/Loading";

//database imports

import en2021 from "./2021/database/en.json";
import vn2021 from "./2021/database/vn.json";

import en2022 from "./2022/database/en.json";
import vn2022 from "./2022/database/vn.json";

import en2023 from "./2023/database/en.json";
import vn2023 from "./2023/database/vn.json";

//Route imports
const Route2021 = lazy(() => import('./routes/Route2021'))
const Route2022 = lazy(() => import('./routes/Route2022'));//lazy loading to prevent all css file being imported at once
const Route2023 = lazy(() => import('./routes/Route2023'));//leading to newer site affecting styling of old archived sites

let currentPath = window.location.pathname;

//Database to use depending on URL
//UPDATE EVERY NEW YEAR
let en = en2023;//Set to current year
let vn = vn2023;//Set to current year

//switch ((currentPath[1] + currentPath[2] + currentPath[3] + currentPath[4] ) .toString()) {
switch ((currentPath[1] + currentPath[2] + currentPath[3] + currentPath[4] ) .toString()) {
  case "2021":
    console.log("data = 2021")
    en = en2021;
    vn = vn2021;
    break;
    case "2022":
    console.log("data = 2022")
    en = en2022;
    vn = vn2022;
    break;
  default:
    console.log("data = 2023")
    en = en2023;//set current year
    vn = vn2023;//set current year
}

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
        <Suspense fallback={<Loading/>}> {/* lazyloading docs: https://legacy.reactjs.org/docs/code-splitting.html#reactlazy */}
          <Routes>
            <Route path="/*" element={<Route2023/>}/>
            <Route path="/2022/*" element={<Route2022/>}/>
            <Route path="/2021/*" element={<Route2021/>}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
