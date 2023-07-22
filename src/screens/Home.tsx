import {
  GetInTouch,
  GetOffer,
  Hero,
  OurEnviroment,
  OurPriceTable,
  OurServices,
  WhatWeDo,
} from "../components/home";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <OurServices />
      <WhatWeDo />
      <OurEnviroment />
      <OurPriceTable />
      <GetOffer />
      <GetInTouch />
    </div>
  );
};

export default Home;
