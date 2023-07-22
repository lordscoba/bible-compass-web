import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../../images/logo";
import { NavInterface } from "../Types/types";
import { navData } from "../datas/data";
const Nav = () => {
  const [showNav, setShowNav] = useState<Boolean>(false);
  return (
    <section className="w-full xl:max-w-[70%] m-auto bg-white py-3">
      <div className={`block xl:flex justify-between items-center `}>
        <div className={`flex items-center pr-2`}>
          <img src={Logo} alt="logo" width={60} height={80} />
          <h2 className="font-bold text-[1.5rem]">START UP</h2>
          <div
            className={`block xl:hidden p-2 ml-auto  border border-[#686ac4] rounded-md cursor-pointer`}
            onClick={() => setShowNav((prev) => !prev)}
          >
            <RxHamburgerMenu className={`text-[1.5rem] `} />
          </div>
        </div>

        <div
          className={`${showNav ? "block pl-3" : "hidden"}  mt-2 xl:flex gap-6`}
        >
          {navData?.length > 0
            ? navData?.map((item: NavInterface, index: any) => {
                return (
                  <ul key={index} id={item?.id}>
                    <li className="mb-3 xl:mb-0 text-[1rem] font-semibold hover:text-[#3c9cdc] cursor-pointer uppercase">
                      {item?.text}
                    </li>
                  </ul>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
};

export default Nav;

// http://www.evethemes.com/demo/lp/startup/demo/demo-1.html
