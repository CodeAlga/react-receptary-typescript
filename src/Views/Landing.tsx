import React from "react";

import Footer from "../Components/Generals/Footer";
import NavBar from "../Components/Generals/NavBar";
import LandingHeader from "../Components/LandingComponents/LandingHeader";
import LatestsRecipies from "../Components/LandingComponents/LatestsRecipies";
import MostPopularRecipies from "../Components/LandingComponents/MostPopularRecipies";
import RecipiesByCateroy from "../Components/LandingComponents/RecipiesByCateroy";

function Landing() {
  return (
    <>
      <NavBar />
      <LandingHeader />
      <LatestsRecipies />
      <RecipiesByCateroy />
      <MostPopularRecipies />
      <Footer />
    </>
  );
}

export default Landing;
