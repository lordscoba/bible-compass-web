import { useEffect, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import PriceCard, { PriceArrayType } from "../card/PriceCard";

const priceData = [
  {
    planType: "Basic",
    price: "25",
    user: 1,
    diskSpace: "5",
    bandwith: "500",
  },
  {
    planType: "STANDARD",
    price: "28",
    user: 5,
    diskSpace: "10GB",
    bandwith: "1TB",
  },
  {
    planType: "PREMIUM",
    price: "32",
    user: 10,
    diskSpace: "15GB",
    bandwith: "10TB",
  },
];

type Props = {};

const OurPriceTable = (props: Props) => {
  const [data, setData] = useState<PriceArrayType>() as any;

  useEffect(() => {
    setData(priceData);
  }, []);
  return (
    <>
      <div className="bg-[#ececec] py-[30px] ">
        <h2 className="text-center font-medium text-[2.5rem]">
          OUR PRICE TABLE
        </h2>
        <div className="w-[9rem] h-1 bg-[#35B3EB] m-auto rounded-sm"></div>
        <PriceCard dataArray={data} />
      </div>
      <SecondSection />
    </>
  );
};

export default OurPriceTable;

const SecondSection = () => {
  return (
    <div className="mt-[5rem] mb-[6rem]  pt-[40px] pb-[30px] px-[20px] xl:px-0 ">
      <div className="w-full xl:w-[80%] m-auto block xl:flex md:flex justify-between gap-6  px-[30px]">
        <div className="mb-[2rem] xl:mb-0">
          <img
            src="http://www.evethemes.com/demo/lp/startup/demo/images/760x490x3.jpg"
            alt="a girl"
            width={760}
            height={490}
          />
        </div>
        <div className="w-full xl:w-[50%] ">
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
      </div>
    </div>
  );
};
