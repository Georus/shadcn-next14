import React from "react";
import ImgsGrid from "./ImgsGrid";
import CardsStack from "./CardsStack";
import BrandsStrip from "./BrandsStrip";
import PageCarousel from "./pageCarousel";

const Homepage = () => {
  return (
    <React.Fragment>
      <PageCarousel />
      <ImgsGrid />
      <CardsStack />
      <BrandsStrip />
    </React.Fragment>
  );
};

export default Homepage;
