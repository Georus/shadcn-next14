import React from "react";
import { images } from "./Carousel/ImageByIndex";
import Image from "next/image";

const ImgsGrid = () => {
  return (
    <section className="mb-2 grid grid-cols-1  bg-secondary md:grid-cols-2 lg:grid-cols-4">
      {images.map((img, i) => (
        <div key={i} className="mx-2 my-2 rounded-sm bg-primary px-2 pt-2">
          <Image
            src={img}
            alt="image desc"
            height={50}
            className="h-[120px] w-full"
          />
          <span className="font-semibold text-primary-foreground">
            WHAT WE DO
          </span>
        </div>
      ))}
    </section>
  );
};

export default ImgsGrid;
