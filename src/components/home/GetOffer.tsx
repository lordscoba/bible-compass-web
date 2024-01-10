import { AiFillAndroid } from "react-icons/ai";
import { BsApple } from "react-icons/bs";

type Props = {};

const GetOffer = (props: Props) => {
  return (
    <div
      className="get-offer mb-[6rem] flex flex-col items-center justify-center"
      id="download"
    >
      <h2 className="text-[2rem] font-semibold text-[#fff] text-center">
        Download our app for Apple and ios
      </h2>
      <p className="text-center text-[#cecece] text-[1rem]">
        You can download your app for both your ios and Android
      </p>
      <div className="flex flex-row space-x-3 text-center mt-12">
        <a
          href="https://play.google.com/store/apps/details?id=com.snappyfix.bible_compass_app"
          type="button"
          className="bg-[#35B3EB] flex items-center space-x-2 text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#fff] hover:text-[#35B3EB] shadow-lg"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <BsApple />
          </span>
          <span>Download App</span>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.snappyfix.bible_compass_app"
          type="button"
          className="bg-[#35B3EB] flex items-center space-x-2 text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#fff] hover:text-[#35B3EB] shadow-lg"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <AiFillAndroid />
          </span>
          <span>Download App</span>
        </a>
      </div>
    </div>
  );
};

export default GetOffer;
