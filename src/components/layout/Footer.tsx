import { FaGooglePlusG } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { SlSocialFacebook } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { Link } from "react-router-dom";
import FlexBetween from "../ReusableComponents/FlexBetween";
import {
  AboutUsInterface,
  ContactUsInterface,
  HelpfulLinkInterface,
} from "../Types/types";
import {
  aboutUsDetails,
  contactUsDetails,
  helpfulLinksDetails,
} from "../datas/data";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className={` bg-[#222] py-[6rem]`}>
      <div className={`w-full max-w-[70%] m-auto`}>
        {/* <div className={`block  xl:flex  justify-between`}> */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2`}>
          <AboutUs />
          <HelpfulLink />
          <ContactUs />
        </div>
        <hr className={`my-[2rem] block h-[.2px] bg-[grey] border-none`} />
        <p className={`text-center text-[#c5c5c4]`}>
          &copy; {date} All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

const AboutUs = () => {
  return (
    <div className={`w-full mb-4 xl:mb-0`}>
      <h2
        className={`text-[#fff] mb-[1rem] text-[1.2rem] text-center xl:text-start`}
      >
        About Us
      </h2>

      <section>
        {aboutUsDetails?.length > 0
          ? aboutUsDetails?.map((item: AboutUsInterface, index: any) => {
              return (
                <div
                  key={index}
                  className={`text-[#B7B5B7] text-[1rem] text-center xl:text-start`}
                >
                  <p className={`mb-[1rem]`}>{item?.textOne}</p>
                  <p>{item?.textTwo}</p>
                </div>
              );
            })
          : null}
      </section>
    </div>
  );
};

const HelpfulLink = () => {
  return (
    <div className={`text-center xl:mt-0  mx-auto`}>
      <h2 className={`text-[#fff] mb-[1rem] text-[1.2rem]`}>Helpful Links</h2>
      <div className={`  `}>
        {helpfulLinksDetails?.length > 0
          ? helpfulLinksDetails?.map(
              (item: HelpfulLinkInterface, index: any) => {
                return (
                  <div key={index} className={` text-[#B7B5B7]`}>
                    <p className="flex items-start xl:justify-start gap-3 mb-3 ">
                      <span className="block mt-2 h-2 w-2 rounded-full bg-white"></span>
                      <Link to={`${item.link}`}>
                        <span className="text-[1rem] mb-3 cursor-pointer">
                          {item?.text}
                        </span>
                      </Link>
                    </p>
                  </div>
                );
              }
            )
          : null}
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className={`w-full xl:max-w-[23%] m-auto xl:mt-0 mt-[3rem] `}>
      <h2
        className={`text-[#fff] mb-[1rem] text-[1.2rem] text-center xl:text-start`}
      >
        Contact us
      </h2>

      <section className="mt-[2rem] xl:mt-0 mb-[2rem] xl:mb-0">
        {contactUsDetails?.length > 0
          ? contactUsDetails?.map((item: ContactUsInterface, index: any) => {
              return (
                <div key={index}>
                  <div
                    className={`flex items-center whitespace-nowrap xl:justify-start justify-center gap-2 text-[#B7B5B7] text-[1rem] mb-[1rem] ${
                      item?.name === "Location"
                        ? "cursor-auto"
                        : "cursor-pointer"
                    }`}
                  >
                    <span className={`text-[1.7rem] `}>{item?.icon}</span>
                    <span>{item?.text}</span>
                  </div>
                </div>
              );
            })
          : null}
        <div
          className={`xl:max-w-[80%] w-[50%] mx-auto xl:mx-0 mt-[2rem] xl:mt-0 `}
        >
          <FlexBetween>
            <div className={`border border-[#fff] py-2 px-2 rounded-[.2rem]`}>
              <SlSocialFacebook
                className={`text-[#fff] text-[1.2rem] font-bold cursor-pointer`}
              />
            </div>
            <div className={`border border-[#fff] py-2 px-2 rounded-[.2rem]`}>
              <TfiTwitter
                className={`text-[#fff] text-[1.2rem] font-bold cursor-pointer`}
              />
            </div>
            <div className={`border border-[#fff] py-2 px-2 rounded-[.2rem]`}>
              <FaGooglePlusG
                className={`text-[#fff] text-[1.2rem] font-bold cursor-pointer`}
              />
            </div>
            <div className={`border border-[#fff] py-2 px-2 rounded-[.2rem]`}>
              <ImInstagram
                className={`text-[#fff] text-[1.2rem] font-bold cursor-pointer`}
              />
            </div>
          </FlexBetween>
        </div>
      </section>
    </div>
  );
};
