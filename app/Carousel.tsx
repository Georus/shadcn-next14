"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden">
      <div className="embla__viewport w-1/2" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide h-[100px] w-[100px] min-w-0 flex-[0_0_100%] bg-red-300">
            Slide 1
          </div>
          <div className="embla__slide h-[100px] w-[100px] min-w-0 flex-[0_0_100%] bg-amber-300">
            Slide 2
          </div>
          <div className="embla__slide h-[100px] w-[100px] min-w-0 flex-[0_0_100%] bg-lime-300">
            Slide 3
          </div>
          <div className="embla__slide h-[100px] w-[100px] min-w-0 flex-[0_0_100%] bg-cyan-300">
            Slide 4
          </div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};

export default EmblaCarousel;
