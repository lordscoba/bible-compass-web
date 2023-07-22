import React, { useEffect, useState } from 'react';
import OurEnviromentCard, { DataArrayTypes } from '../card/OurEnviromentCard';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const envData = [
  {
    image: 'http://www.evethemes.com/demo/lp/startup/demo/images/400x330x1.jpg',
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
  },
  {
    image: 'http://www.evethemes.com/demo/lp/startup/demo/images/400x330x2.jpg',
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
  },
  {
    image: 'http://www.evethemes.com/demo/lp/startup/demo/images/400x330x3.jpg',
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
  },
];

type Props = {};

const OurEnviroment = (props: Props) => {
  const [data, setData] = useState<DataArrayTypes>() as any;

  useEffect(() => {
    setData(envData);
  }, []);
  return (
    <div>
      <h2 className="text-center font-medium text-[2.5rem]">OUR ENVIRONMENT</h2>
      <div className="w-[9rem] h-1 bg-[#35B3EB] m-auto rounded-sm"></div>

      <OurEnviromentCard dataArray={data} />
      <SecondSection />
    </div>
  );
};

export default OurEnviroment;

const SecondSection = () => {
  return (
    <div className="mt-[5rem] mb-[6rem] bg-[#ececec] pt-[40px] pb-[30px] px-[20px] xl:px-0 ">
      <div className="w-full xl:w-[80%] m-auto block xl:flex md:flex justify-between gap-6  px-[30px]">
        <div className="w-full xl:w-[50%] mb-[2rem] xl:mb-0">
          <h4 className="text-[1.2rem] font-semibold mb-[1rem]">
            LOREM IPSUM DOLOR MAGNA ALIQUA
          </h4>
          <p className="mb-[2rem] p-2 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula dui sit amet ligula cursus, eget molestie diam accumsan.
            Pellentesque vel suscipit dolor. Integer et dapibus nibh. Aenean
            arcu viverra varius sodales sociosqu torquent himenaeos. Lorem ipsum
            dolor sit amet.
          </p>

          <p className="mb-[2rem] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula dui sit amet ligula cursus, eget molestie diam accumsan.
            Pellentesque vel suscipit dolor. Integer et dapibus nibh. Aenean
            arcu viverra varius sodales sociosqu torquent himenaeos. Lorem ipsum
            dolor sit amet.
          </p>
          <div className=" flex items-center xl:justify-start justify-center gap-4 text-[#35B3EB] transition-transform [&>span]:hover:pl-3">
            <button type="button">READ MORE</button>
            <span className=" w-[30px]">
              <HiOutlineArrowLongRight />
            </span>
          </div>
        </div>
        <div className="">
          <img
            src="http://www.evethemes.com/demo/lp/startup/demo/images/760x490x1.jpg"
            alt="a girl"
            width={760}
            height={490}
          />
        </div>
      </div>
    </div>
  );
};
