import React from "react";
import { useTranslation } from 'react-multi-lang';

const Landing = () => {
    useTranslation()
    const t = useTranslation()

  return (
    <div className="landing">
      <div className="background__wrapper">
        {/* <video preload autoPlay muted className="background__video">
          <source src="/resources/pages/home/Promo.mp4" type="video/mp4" />
        </video> */}
        
    <div className="background__image">
            <p className="glow">
            </p>
            <img alt="image" src="http://www.hvmatl.net/gallery/LHMT_img/LHMT2021/Logos/2021-den-voi-nhau-400.png"/>
            <p className="text1">FALL FESTIVAL 2021</p>
            <p className="text2">Sept. 3-5 at Holy Vietnamese Martyrs Catholic Church in Norcross, GA</p>
        </div>
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
