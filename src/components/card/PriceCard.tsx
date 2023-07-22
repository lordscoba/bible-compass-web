import React from 'react';

interface PriceInterface {
  planType: string;
  price: string;
  user: Number;
  diskSpace: string;
  bandwith: string;
}

export type PriceArrayType = {
  dataArray: Array<PriceInterface>;
};

const PriceCard = ({ dataArray }: PriceArrayType) => {
  return (
    <div className="mt-[5rem] mb-[6rem] ">
      <section className="w-full xl:w-[80%] block xl:flex md:flex items-center gap-4 m-auto px-[30px]">
        {dataArray?.length > 0
          ? dataArray?.map((item: PriceInterface, index: any) => {
              return (
                <div
                  key={index}
                  className={`bg-[#fff] shadow-2xl w-[418px] hover:border hover:rounded-lg  text-center py-[20px] px-[5px] mb-[2rem] xl:mb-0 ${
                    index === 1 ? 'border border-[#35B3EB]' : ''
                  }`}
                >
                  <h2 className="text-[1.1rem] font-medium my-[1rem]">
                    {item?.planType}
                  </h2>

                  <p className="[&>sup]:text-[16px] text-[2.5rem] [&>sub]:text-[14px] text-[#666666] my-[1.5rem]">
                    <sup>$</sup> {item?.price}
                    <sub>/PM</sub>
                  </p>
                  <p
                    className={`border-b border-dotted py-4 ${
                      index === 1 ? 'border-[#35B3EB]' : ''
                    }`}
                  >
                    {Number(item?.user)}{' '}
                    {Number(item?.user) > 1 ? 'Users' : 'user'}
                  </p>
                  <p
                    className={`border-b border-dotted py-4 ${
                      index === 1 ? 'border-[#35B3EB]' : ''
                    }`}
                  >
                    {item?.planType} Disk Space
                  </p>
                  <p
                    className={`border-b border-dotted py-4 ${
                      index === 1 ? 'border-[#35B3EB]' : ''
                    }`}
                  >
                    {item?.bandwith} Bandwidth
                  </p>
                  <p
                    className={`border-b border-dotted py-4 ${
                      index === 1 ? 'border-[#35B3EB]' : ''
                    }`}
                  >
                    24/7 Tech Support
                  </p>
                  <p
                    className={`border-b border-dotted py-4 ${
                      index === 1 ? 'border-[#35B3EB]' : ''
                    }`}
                  >
                    Email Support
                  </p>
                  <p>Free Upgrades</p>
                </div>
              );
            })
          : null}
      </section>
      <div className="text-center mt-12">
        <button
          type="button"
          className="bg-[#35B3EB] text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#fff] hover:text-[#35B3EB] shadow-lg"
        >
          MORE PLAN
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
