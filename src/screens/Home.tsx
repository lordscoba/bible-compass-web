import { useEffect, useState } from 'react';
import Card from '../components/card/Card';
import OurEnviroment from '../components/homeComponents/OurEnviroment';
import GetOffer from '../components/homeComponents/GetOffer';
import OurPriceTable from '../components/homeComponents/OurPriceTable';
import GetInTouch from '../components/homeComponents/GetInTouch';

const Home = () => {
  return (
    <div className="relative">
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

const Hero = () => {
  return (
    <div className={` w-full  h-[60rem] mb-[3rem]`}>
      <div className="hero">
        <section
          className={`w-full xl:w-[50%] lg:w-[50%] md:w-[70%] pt-[25rem] ml-auto  md:text-center text-center xl:text-start`}
        >
          <div className={`w-full xl:w-[40rem]`}>
            <h5 className="font-bold text-[1.3rem] text-[#35B3EB] mb-1">
              Business Startup
            </h5>
            <p className="text-[2.5rem] font-medium mb-2 px-[20px] xl:px-0 text-[#002629]">
              PREMIUM HTML TEMPLATE
            </p>

            <p className="mb-[3rem]">
              Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
              lacinia ultrices. commodo tristique. Duis lacus urna, condimentum
              a vehicula a, hendrerit ac nisi lorem ipsum dolor sit amet
              vulputate
            </p>

            <button className="bg-[#35B3EB] text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#fff] hover:text-[#35B3EB] shadow-md">
              READ MORE
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

const cardData = [
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x1.png',
  },
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x2.png',
  },
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x3.png',
  },
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x4.png',
  },
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x5.png',
  },
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x6.png',
  },
];

const OurServices = () => {
  const [data, setData] = useState<{
    icon: string;
    header: string;
    body: string;
  }>() as any;

  useEffect(() => {
    setData(cardData);
  }, []);
  return (
    <div className={`my-[2rem]`}>
      <h2 className="text-center font-medium text-[2.5rem]">OUR SERVICES</h2>
      <div className="w-[9rem] h-1 bg-[#35B3EB] m-auto rounded-sm"></div>
      <Card dataArray={data} />
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <div className="bg-[#ececec] pt-[40px] pb-[30px] mb-[3rem] px-[20px] xl:px-0">
      <div className="w-full xl:w-[80%]  mb-[5rem] block xl:flex md:flex items-center gap-[2rem] m-auto py-[30px] ">
        <div className="mb-[2rem] xl:mb-0">
          <img
            src="http://www.evethemes.com/demo/lp/startup/demo/images/760x490x2.jpg"
            alt="teachers"
            width={760}
            height={490}
          />
        </div>

        <div className="w-full py-[1rem] xl:w-[50%] ">
          <h4 className="text-[1.2rem] font-semibold text-[#002639]">
            WHAT WE DO
          </h4>
          <p className="mb-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula dui sit amet ligula cursus, eget molestie diam accumsan.
            Pellentesque vel suscipit dolor. Integer et dapibus nibh.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula dui sit amet ligula cursus, eget molestie diam accumsan.
          </p>
          <div className="flex items-center gap-[1rem] pb-[2rem] pt-[2rem]">
            <img
              src="http://www.evethemes.com/demo/lp/startup/demo/images/24x24x1.png"
              alt="icon"
              width={24}
              height={24}
            />
            <span> Experienced Solutions</span>
          </div>
          <div className="flex items-center gap-[1rem] pb-[2rem]">
            <img
              src="http://www.evethemes.com/demo/lp/startup/demo/images/24x24x2.png"
              alt="icon"
              width={24}
              height={24}
            />
            <span> Marketing And Branding</span>
          </div>
          <div className="flex items-center gap-[1rem]">
            <img
              src="http://www.evethemes.com/demo/lp/startup/demo/images/24x24x3.png"
              alt="icon"
              width={24}
              height={24}
            />
            <span> Best Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};
