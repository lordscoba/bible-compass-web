import {
  GetInTouch,
  GetOffer,
  Hero,
  OurEnviroment,
  OurPriceTable,
  OurServices,
  WhatWeDo,
} from "../components/home";
import { Footer, Nav } from "../components/layout";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <OurServices />
      <WhatWeDo />
      <OurEnviroment />
      <OurPriceTable />
      <GetOffer />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
