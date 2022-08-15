import React, { useState } from "react";
import { getLanguage, useTranslation } from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';

const Landing = () => {
    useTranslation()
    const t = useTranslation()


  let [video, setVideo] = useState(true);

  return (
    <div className="landing">
      <div className="background__wrapper">
        {/* <video preload autoPlay muted className="background__video">
          <source src="/resources/pages/home/Promo.mp4" type="video/mp4" />
        </video> */}
        <div className={"video" + (video === true ? " active" : "")}>
          <span
            onClick={() => {
              setVideo(false);
            }}
          >
            X
          </span>
          <video width="750" height="500" preload autoPlay muted>
            <source src="/resources/pages/home/Promo.mp4" type="video/mp4" />
          </video>
          <div className="video__overlay" />
        </div>

        <a
          href="https://hvmatl.com/gallery/LHMT_img/LHMT2022/Carousel/MainPoster.jpg"
          target={"_blank"}
        >
          <img
            src="/resources/pages/home/NewBackground.png"
            alt=""
            className="background__image"
          />
        </a>
        <div className="landing__header__container">
          <h1 className="landing__header">
            lễ hội <br />
            <span>mùa thu</span>
          </h1>
          <h2 className="landing__header--en">FALL FESTIVAL</h2>
          <h3 className="landing__subheader">SEPTEMBER 2 - 4, 2022</h3>
          <p className="landing__address">
            4545 Timmers Way, Norcross GA 30093
          </p>
        </div>
      </div>

      <div className="rewards">
        <div className="reward__container">
          <div className="reward">
            <h3 className="reward__header">Like and Share!</h3>
            <p className="reward__para">
               {t('landing.reward_1')}
            </p>
          </div>
          <figure className="reward__image--wrapper">
            <img
              src="http://www.hvmatl.net/gallery/LHMT_img/LHMT2022/Carousel/MugGift1.jpg"
              alt=""
              className="reward__image"
            />
          </figure>
        </div>
        <div className="reward__container">
          <div className="reward">
            <h3 className="reward__header">Raffles!</h3>
            <p className="reward__para">
               {t('landing.reward_2')}
            </p>
                      <p className="reward__para">{t('landing.reward_3')}</p>
            <p className="reward__para">
                {t('landing.reward_4')}
            </p>
          </div>
          <figure className="reward__image--wrapper">
            <img
              src="https://hvmatl.com/gallery/LHMT_img/LHMT2022/Pages/Raffles/VesoPromo.png"
              alt=""
              className="reward__image"
            />
          </figure>
        </div>
        <div className="reward__container">
          <div className="reward">
            <h3 className="reward__header">Grand Prize!</h3>
            <p className="reward__para">
               {t('landing.reward_5')}
            </p>
          </div>
          <figure className="reward__image--wrapper">
            <img
              src="https://hvmatl.com/gallery/LHMT_img/LHMT2022/Pages/Raffles/Raffle.jpg"
              alt=""
              className="reward__image"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Landing;
