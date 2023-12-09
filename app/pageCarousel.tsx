"use client";
import React from "react";
import EmblaCarousel from "./Carousel/Carousel";
import useMediaQuery from "@/lib/useMediaQuery";
import { EmblaOptionsType } from "embla-carousel-react";

const PageCarousel = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const scrollN = isDesktop ? 2 : 1;

  const OPTIONS: EmblaOptionsType = {
    align: "start",
    loop: true,
    slidesToScroll: scrollN,
  };
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>;
};

export default PageCarousel;
