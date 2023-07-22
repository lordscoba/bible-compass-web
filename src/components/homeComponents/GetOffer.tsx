import React from 'react';

type Props = {};

const GetOffer = (props: Props) => {
  return (
    <div className="get-offer mb-[6rem] flex flex-col items-center justify-center">
      <h2 className="text-[2rem] font-semibold text-[#fff]">
        GET EARLY BIRD OFFER
      </h2>
      <p className="text-center text-[#cecece] text-[1rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
        dui sit amet ligula cursus, <br /> eget molestie diam accumsan.
        Pellentesque vel suscipit dolor.
      </p>
      <div className="text-center mt-12">
        <button
          type="button"
          className="bg-[#35B3EB] text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#fff] hover:text-[#35B3EB] shadow-lg"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default GetOffer;
