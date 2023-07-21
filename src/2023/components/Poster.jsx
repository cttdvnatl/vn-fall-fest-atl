import React from "react";
import { useTranslation } from 'react-multi-lang';


const Poster = () => {
    useTranslation()
    const t = useTranslation()

  return (
    <>
    <div className="landing">
      <div className="background__wrapper">
        <a href={t('landing.poster.link')} target={"_blank"}>
        <img alt="image" src="https://hvmatl.com/gallery/LHMT_img/LHMT2023/Construction%20sign/UnderConstruction.png"/>
            <img src={t('landing.poster.image')} alt="" className="background__image" />
        </a>
       </div>
    </div>
    </>
  );
};

export default Poster;
