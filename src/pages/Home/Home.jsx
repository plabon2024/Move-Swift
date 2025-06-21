import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import OurServices from "./OurServices";
import HowItWorksSection from "./HowItWorks";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <HowItWorksSection></HowItWorksSection>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
