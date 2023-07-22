import React from 'react';
import { FaUser, FaRegEnvelope } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';

type Props = {};

const GetInTouch = (props: Props) => {
  return (
    <div className="bg-[#ececec] py-[30px] px-[8px]">
      <h2 className=" text-center my-[1.7rem] text-[2rem] font-semibold">
        GET IN TOUCH WITH STARTUP TEAM
      </h2>
      <p className="text-center leading-7 text-[#837f7f] text-[1.1rem] mb-[1.6rem] w-full xl:w-[60%] md:w-[60%] m-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
        efficitur diam, vel sagittis ipsum. Curabitur eleifend, risus id
        sollicitudin pretium, massa ex tristique velit
      </p>
      <form className="w-full xl:w-[60%] md:w-[60%] m-auto px-[14px] ">
        <div className="block xl:flex flex-1 gap-4 mb-[3rem]">
          <div className="w-full flex items-center gap-3 border-b border-[#8d8a8a] py-[8px] mb-[1rem] xl:mb-0">
            <FaUser />
            <input
              type="text"
              placeholder="Please Enter Name"
              className="w-full bg-inherit border-none outline-none"
            />
          </div>
          <div className="w-full flex items-center gap-3 border-b border-[#8d8a8a] py-[8px] mb-[1rem] xl:mb-0">
            <FaRegEnvelope />
            <input
              type="text"
              placeholder="Please Enter Email"
              className="w-full bg-inherit border-none outline-none"
            />
          </div>
          <div className="w-full flex items-center gap-3 border-b border-[#8d8a8a] py-[8px] mb-[1rem] xl:mb-0">
            <MdCall />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-inherit border-none outline-none  focus-within:border-2 border-[#35B3EB]"
            />
          </div>
        </div>
        <div className="border-b border-[#8d8a8a] flex items-start gap-3">
          <div className="mt-1">
            <FaRegEnvelope />
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="w-full bg-inherit border-none outline-none"
          ></textarea>
        </div>
        <div className="text-center mt-12">
          <button
            type="button"
            className="bg-[#35B3EB] text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#fff] hover:text-[#35B3EB] shadow-lg"
          >
            BUY NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
