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
 
        <a
          href="https://hvmatl.com/gallery/LHMT_img/LHMT2022/Carousel/MainPoster.jpg"
          target={"_blank"}
        >
 
          <img
                      src="https://hvmatl.com/gallery/LHMT_img/LHMT2022/Carousel/MainPoster2.jpg"
            alt=""
            className="background__image"
          />

        </a>
       </div>

      <div className="rewards">
              <div className="reward__container">
                  <div className="reward">
                      <h3 className="reward__header">Raffle Winners!</h3>
                      <p className="reward__para">
                          {t('landing.reward_6')}
                      </p>
                  </div>
                  <figure className="reward__image--wrapper">
                      <img
                          src="https://hvmatl.com/gallery/LHMT_img/LHMT2022/Pages/Raffles/RaffleWinners.jpg"
                          alt=""
                          className="reward__image"
                      />
                  </figure>
              </div>
              <div className="reward__container">
                  <div className="reward">
                      <h3 className="reward__header">Bingo!</h3>
                      <p className="reward__para">
                          {t('landing.reward_7')}
                      </p>
                  </div>
                  <figure className="reward__image--wrapper">
                      <img
                          src="https://hvmatl.com/gallery/LHMT_img/LHMT2022/Pages/Raffles/Bingo.jpg"
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
