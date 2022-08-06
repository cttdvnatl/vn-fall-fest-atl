import React, { useState } from "react";

const Landing = () => {
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
            <h3 className="reward__header">Share!</h3>
            <p className="reward__para">
              Come join us in liking your favorite singers and sharing the post!
            </p>
            <p className="reward__para">
              We will be choosing 10 random individuals that "shared or liked"
              before August 7, 2022 to recieve a limited edition stainless stell
              mug with the 2022 Fall Festival Logo!
            </p>
          </div>
          <figure className="reward__image--wrapper">
            <img
              src="http://www.hvmatl.net/gallery/LHMT_img/LHMT2022/Carousel/MugGift.jpg"
              alt=""
              className="reward__image"
            />
          </figure>
        </div>
        <div className="reward__container">
          <figure className="reward__image--wrapper">
            <img
              src="https://hvmatl.com/gallery/LHMT_img/LHMT2022/Pages/Raffles/VesoPromo.png"
              alt=""
              className="reward__image"
            />
          </figure>
          <div className="reward">
            <h3 className="reward__header">Raffle!</h3>
            <p className="reward__para">10 chances to WIN 10 great prizes</p>
            <p className="reward__para">
              Grab 5 raffles and get 1 FREE! Contact us at
              fallfest.raffle@hvmatl.org to purchase your raffle tickets.
            </p>
          </div>
        </div>
        <div className="reward__container">
          <div className="reward">
            <h3 className="reward__header">Grand Prize!</h3>
            <p className="reward__para">
              You can be the luckiest of them all on September 4th and bring
              yourself a BRAND NEW LEXUS!!!
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
