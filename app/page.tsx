"use client";
import React from "react";
import EmblaCarousel from "./Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import useMediaQuery from "@/lib/useMediaQuery";
import ImgsGrid from "./ImgsGrid";
import CardsStack from "./CardsStack";
import BrandsStrip from "./BrandsStrip";

const Homepage = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const scrollN = isDesktop ? 2 : 1;

  const OPTIONS: EmblaOptionsType = {
    align: "start",
    loop: true,
    slidesToScroll: scrollN,
  };
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <React.Fragment>
      <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
      <ImgsGrid />
      <CardsStack />
      <BrandsStrip />
    </React.Fragment>
  );
};

export default Homepage;
