import React from "react";
import { getLanguage, useTranslation } from "react-multi-lang";
import vn from "../database/vn";
import en from "../database/en";
//import Carousel from "../components/Carousel";
//import Sponsors from '../components/Sponsors';
import {SponsorsPage} from "./SponsorsPage";
import PhotoGallery from "../components/PhotoGallery";
import FestivalStatistics from "../components/FestivalStatistics";
import Poster from "../components/Poster";
import Rewards from "../components/Rewards";
import RafflePopUp from "../components/RafflePopUp"

export const HomePage = () => {
  useTranslation();

  let rewardsData;
  let photoGalleryDataOne;
  let photoGalleryDataTwo;

  if (getLanguage() === "vn") {
    rewardsData = vn.rewards;
    photoGalleryDataOne = vn.photoGalleries.galleryOne;
    photoGalleryDataTwo = vn.photoGalleries.galleryTwo;
  } else if (getLanguage() === "en") {
    rewardsData = en.rewards;
    photoGalleryDataOne = en.photoGalleries.galleryOne;
    photoGalleryDataTwo = en.photoGalleries.galleryTwo;
  }

  return (
    <>
      {/* <Carousel /> */}<RafflePopUp />
      <Poster />
      <Rewards data={rewardsData}/>
      <FestivalStatistics />
      <PhotoGallery data={photoGalleryDataOne} />
      <PhotoGallery data={photoGalleryDataTwo} />
    </>
  );
};