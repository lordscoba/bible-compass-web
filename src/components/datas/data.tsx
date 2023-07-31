import { AiOutlineLink } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";

export const months = [
  "JAN",
  "FEB",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const dateFunction = new Date();
const date = dateFunction
  .toDateString()
  .replace(dateFunction.toDateString().split(" ")[0], "");
// const month = months[dateFunction.getMonth()];
// const year = dateFunction.getFullYear();

// const combinedDate = `${day} ${month} ${year}`;

console.log({ ccc: date });
export const navData = [
  {
    id: "#home",
    text: "Home",
  },
  {
    id: "#service",
    text: "Services",
  },
  {
    id: "#download",
    text: "Download",
  },
  {
    id: "#contact",
    text: "Contact",
  },
];

/**FOOTER */

// ABOUT US

export const aboutUsDetails = [
  {
    textOne:
      "We are a company looking to provide easy solutions to your bible study.",
    textTwo:
      "We have provided useful functionalities in the app to help you navigate your bible more efficiently.",
  },
];

// HELPFUL LINKS

export const helpfulLinksDetails = [
  {
    text: "Help Desk",
    link: "/#help",
  },
  {
    text: "Our Features",
    link: "/#ourFeatures",
  },
  {
    text: "Support",
    link: "/#support",
  },
  {
    text: "Contact Us",
    link: "/#contactUs",
  },
  {
    text: "About Us",
    link: "/#aboutUs",
  },
];

export const latestPostDetails = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "http://www.evethemes.com/demo/lp/startup/demo/images/80x80x1.png",
    date: date,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "http://www.evethemes.com/demo/lp/startup/demo/images/80x80x2.png",
    date: date,
  },
];

export const contactUsDetails = [
  {
    text: "Abuja, Nigeria",
    icon: <CiLocationOn />,
    name: "Location",
  },
  {
    text: "support@bible-compass.com",
    icon: <AiOutlineLink />,
    name: "mail",
  },
  {
    text: "+2348127681903 or +2349064846163",
    icon: <LuPhoneCall />,
    name: "call",
  },
];

export const ourServiceDetails = [
  {
    text: "Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt",
    heading: "LOREM IPSUM DOLOR",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x1.png",
  },
  {
    text: "Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt",
    heading: "LOREM IPSUM DOLOR",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x2.png",
  },
  {
    text: "Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt",
    heading: "LOREM IPSUM DOLOR",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x3.png",
  },

  {
    text: "Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt",
    heading: "LOREM IPSUM DOLOR",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x4.png",
  },
  {
    text: "Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt",
    heading: "LOREM IPSUM DOLOR",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x5.png",
  },

  {
    text: "Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt",
    heading: "LOREM IPSUM DOLOR",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x6.png",
  },
];
