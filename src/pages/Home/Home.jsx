import React from "react";

import Banner from "../../components/Banner";
import OurServices from "./OurServices";
import HowItWorksSection from "./HowItWorks";
import ClientMarquee from "./ClientMarquee";
import Features from "./Features";
import Commitment from "./Commitment";
import Slides from "./Slides";
import Faq from "./Faq";

const Home = () => {
  return (<>
      <Banner></Banner>
      <HowItWorksSection></HowItWorksSection>
      <OurServices></OurServices>
      <ClientMarquee></ClientMarquee>
      <Features></Features>
      <Commitment></Commitment>

      <Slides></Slides>
      <Faq></Faq>
  </>
  );
};

export default Home;
