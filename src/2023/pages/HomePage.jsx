import React from "react";
import { getLanguage, useTranslation } from "react-multi-lang";
import vn from "../database/vn";
import en from "../database/en";
import Carousel from "../components/Carousel";
//import Sponsors from '../components/Sponsors';
import {SponsorsPage} from "./SponsorsPage";
import PhotoGallery from "../components/PhotoGallery";
import FestivalStatistics from "../components/FestivalStatistics";
import Landing from "../components/Landing";

export const HomePage = () => {
  useTranslation();

  let photoGalleryDataOne;
  let photoGalleryDataTwo;

  if (getLanguage() === "vn") {
    photoGalleryDataOne = vn.photoGalleries.galleryOne;
    photoGalleryDataTwo = vn.photoGalleries.galleryTwo;
  } else if (getLanguage() === "en") {
    photoGalleryDataOne = en.photoGalleries.galleryOne;
    photoGalleryDataTwo = en.photoGalleries.galleryTwo;
  }

  return (
    <>
      {/* <Carousel /> */}
      <Landing />
      <SponsorsPage type={"small"} />
      <FestivalStatistics />
      <PhotoGallery data={photoGalleryDataOne} />
      <PhotoGallery data={photoGalleryDataTwo} />
    </>
  );
};