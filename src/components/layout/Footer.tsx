import FlexBetween from '../ReusableComponents/FlexBetween';
import {
  AboutUsInterface,
  ContactUsInterface,
  HelpfulLinkInterface,
  LatestPostInterface,
} from '../Types/types';
import { aboutUsDetails } from '../datas/data';
import { contactUsDetails } from '../datas/data';
import { latestPostDetails } from '../datas/data';
import { helpfulLinksDetails } from '../datas/data';
import { SlSocialFacebook } from 'react-icons/sl';
import { TfiTwitter } from 'react-icons/tfi';
import { FaGooglePlusG } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className={` bg-[#222] py-[6rem]`}>
      <div className={`w-full max-w-[70%] m-auto`}>
        <div className={`block  xl:flex justify-between`}>
          <AboutUs />
          <HelpfulLink />
          <LatestPost />
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
    <div className={`w-full xl:max-w-[25%] mb-4 xl:mb-0`}>
      <h2
        className={`text-[#fff] mb-[1rem] text-[1.2rem] text-center xl:text-start`}
      >
        About Us
      </h2>

      <section>
        {aboutUsDetails?.length > 0
          ? aboutUsDetails?.map((item: AboutUsInterface, index: any) => {
              return (
                <div key={index} className={`text-[#B7B5B7] text-[1rem]`}>
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
    <div className={`text-center mb-4 mx-auto`}>
      <h2 className={`text-[#fff] mb-[1rem] text-[1.2rem]`}>Helpful Links</h2>
      <div className={`  `}>
        {helpfulLinksDetails?.length > 0
          ? helpfulLinksDetails?.map(
              (item: HelpfulLinkInterface, index: any) => {
                return (
                  <div
                    className={` w-[50%] xl:w-full m-auto flex items-center gap-4 text-[#B7B5B7]`}
                  >
                    <p
                      className={`w-[6px] h-[6px] bg-[#fff] rounded-[50%]`}
                    ></p>
                    <p className={`text-[1rem] mb-3 cursor-pointer`}>
                      {item?.text}
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

const LatestPost = () => {
  return (
    <div className={`w-full xl:max-w-[30%] mb-6 xl:mb-0`}>
      <h2
        className={`text-[#fff]  text-[1.2rem] mb-[1rem] xl:text-start text-center `}
      >
        Latest Post
      </h2>

      <section className={`mx-auto`}>
        {latestPostDetails?.length > 0
          ? latestPostDetails?.map((item: LatestPostInterface, index: any) => {
              return (
                <div
                  key={index}
                  className={`flex items-center gap-2 mb-3 text-[1rem]`}
                >
                  <div>
                    <img
                      src={item?.image}
                      alt="picture"
                      width={120}
                      height={120}
                      className="object-cover"
                    />
                  </div>

                  <div className="max-h-[50%]">
                    <p className={`text-[#B7B5B7] mb-2`}>{item?.text}</p>
                    <p className="text-[#347D8F]">{item?.date}</p>
                  </div>
                </div>
              );
            })
          : null}
      </section>
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

      <section>
        {contactUsDetails?.length > 0
          ? contactUsDetails?.map((item: ContactUsInterface, index: any) => {
              return (
                <div key={index}>
                  <div
                    className={`flex items-center gap-2 text-[#B7B5B7] text-[1rem] mb-[1rem] ${
                      item?.name === 'Location'
                        ? 'cursor-auto'
                        : 'cursor-pointer'
                    }`}
                  >
                    <span className={`text-[1.7rem] `}>{item?.icon}</span>
                    <span>{item?.text}</span>
                  </div>
                </div>
              );
            })
          : null}
        <div className={`max-w-[80%]`}>
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
