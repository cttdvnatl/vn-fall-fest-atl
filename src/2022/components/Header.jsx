import React, { useRef, useCallback, useEffect } from "react";
import { useTranslation, setLanguage, getLanguage } from "react-multi-lang";
import SocialIcons from "./SocialIcons";
//import PopUp from './PopUp';
import { ArchiveDropdown } from "../../shared-components/ArchiveDropdown";

export const Header = () => {
  const nav = useRef(null);
  const sideNav = useRef(null);
  const mainHeader = useRef(null);

  const displayNone = {
    display: "none",
  };

  //const displayBlock = {
  //    display: 'block'
  //}

  const displayViet = {
    display: "block",
    backgroundColor: "#ffcc00",
  };

  const displayEng = {
    display: "block",
    backgroundColor: "#005ce6",
  };

  //Set Language and Cookie
  let displayEN = {};
  let displayVN = {};

  const t = useTranslation();

  function setLangCookie() {
    document.cookie = "language = " + getLanguage();
  }
  function setLanguageVN() {
    setLanguage("vn");
    setLangCookie("vn");
  }
  function setLanguageEN() {
    setLanguage("en");
    setLangCookie("en");
  }

  if (getLanguage() + "" === "en") {
    displayEN = displayNone;
    displayVN = displayViet;
  } else if (getLanguage() + "" === "vn") {
    displayVN = displayNone;
    displayEN = displayEng;
  }
  /*
    //function for popups
    let PopUpStyle = {};
    let checkPopUp;
    let PopUpData = 'topHeader.button1.image1'

    if (checkPopUp === 'display') {
        PopUpStyle = displayBlock
    }
    else {
        PopUpStyle = displayNone
    }

    function triggerPopUp(popUpParam) {
        checkPopUp = 'display';
        PopUpData = popUpParam;
    }
    
    function closePopUp() {
       checkPopUp = ''
    }*/

  //making top header disappear after 1 scroll
  const scrollCallback = useCallback(() => {
    const sticky = nav.current.offsetTop;
    if (window.pageYOffset > sticky) {
      nav.current.classList.add("is-sticky");
    } else {
      nav.current.classList.remove("is-sticky");
    }
  }, []);

  //desktop to mobile view
  const resizeCallback = useCallback(() => {
    if (window.innerWidth < 1231) {
      nav.current.classList.remove("desktop-view");
      nav.current.classList.add("mobile-view");
    } else {
      nav.current.classList.remove("mobile-view");
      nav.current.classList.add("desktop-view");
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

  const openSideNav = () => {
    sideNav.current.classList.remove("closeSideNav");
    sideNav.current.classList.add("openSideNav");
  };
  const closeSideNav = () => {
    sideNav.current.classList.remove("openSideNav");
    sideNav.current.classList.add("closeSideNav");
  };

  const toggleSubmenu = (index, e) => {
    console.log("submenu");
    if (window.innerWidth < 1231) {
      for (let i = 0; i < sideNav.current.children.length; i++) {
        if (
          i === index &&
          !sideNav.current.children[i].classList.contains("active")
        ) {
          sideNav.current.children[i].classList.add("active");
        } else {
          sideNav.current.children[i].classList.remove("active");
          if (sideNav.current.children[i].children[1] !== undefined)
            sideNav.current.children[i].children[1].removeAttribute("style");
        }
      }
    }
  };

  return (
    <>
      {/*<div style={PopUpStyle}>
            <PopUp data={PopUpData}/>
        </div>*/}
      <nav ref={nav} class="">
        <div class="top-header">
          <div class="top-header-items-left">
            <div class="back-to-main">
              <a href="https://www.hvmatl.org">main</a>
            </div>
            <SocialIcons />
            <p id="eventDate">September 2 - 3 - 4</p>
          </div>

          <div class="top-header-items-right">
            <div class="directionAndDonationDesktop">
              <a href={t("topHeader.link1.link")}>
                {t("topHeader.link1.text")}
              </a>
              <a href={t("topHeader.link2.link")}>
                {t("topHeader.link2.text")}
              </a>
              <a href={t("topHeader.link3.link")} download>
                {t("topHeader.link3.text")}
              </a>
            </div>
            <ArchiveDropdown year={2022}/>
            <div class="translation-button">
              <button
                style={displayVN}
                id="vn"
                class="translation-button"
                onClick={() => setLanguageVN()}
              >
                Tiếng Việt
              </button>
              <button
                style={displayEN}
                id="en"
                class="translation-button"
                onClick={() => setLanguageEN()}
              >
                English
              </button>
            </div>
          </div>
        </div>
        <div ref={mainHeader} class="main-header">
          <div class="logo">
            <a href="/">
              <img
                alt="logo"
                src="http://www.hvmatl.net/gallery/LHMT_img/LHMT2022/Logos/LogoSucSongMoi.png"
              ></img>
            </a>
          </div>

          <div className="open--wrapper">
            <span onClick={() => openSideNav()} class="open">
              &#8801;
            </span>
          </div>

          <div class="directionAndDonationMobile">
            <a href={t("topHeader.link1.link")}>{t("topHeader.link1.text")}</a>
            <a href={t("topHeader.link2.link")}>{t("topHeader.link2.text")}</a>
          </div>

          <ul ref={sideNav} class="closeSideNav">
            <span class="close" onClick={() => closeSideNav()}>
              &#10005;
            </span>
            <li>
              <p>
                <a href={t("header.dropdownOne.href")}>
                  {t("header.dropdownOne.heading")}
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href={t("header.dropdownTwo.href")}>
                  {t("header.dropdownTwo.heading")}
                </a>
              </p>
            </li>
            <li
              onClick={(e) => {
                toggleSubmenu(3, e);
              }}
            >
              <p>{t("header.dropdownThree.heading")}</p>
              <ul>
                <li>
                  <a href={t("header.dropdownThree.href1")}>
                    {t("header.dropdownThree.item1")}
                  </a>
                </li>
                <li>
                  <a href={t("header.dropdownThree.href2")}>
                    {t("header.dropdownThree.item2")}
                  </a>
                </li>
                <li>
                  <a href={t("header.dropdownThree.href3")}>
                    {t("header.dropdownThree.item3")}
                  </a>
                </li>
                <li>
                  <a href={t("header.dropdownThree.href4")}>
                    {t("header.dropdownThree.item4")}
                  </a>
                </li>
                <li>
                  <a href={t("header.dropdownThree.href5")}>
                    {t("header.dropdownThree.item5")}
                  </a>
                </li>
              </ul>
            </li>
            <li
              onClick={(e) => {
                toggleSubmenu(4, e);
              }}
            >
              <p>
                <a href={t("header.dropdownFour.href1")}>
                  {t("header.dropdownFour.heading")}
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href={t("header.dropdownFive.href")}>
                  {t("header.dropdownFive.heading")}
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href={t("header.dropdownSix.href")}>
                  {t("header.dropdownSix.heading")}
                </a>
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}; 