const WhatWeDo = () => {
  return (
    <div className="bg-[#ececec] pt-[40px] pb-[30px] mb-[3rem] px-[20px] xl:px-0">
      <div className="w-full xl:w-[80%]  mb-[5rem] block xl:flex md:flex items-center gap-[2rem] m-auto py-[30px] ">
        <div className="mb-[2rem] xl:mb-0">
          <img
            src="http://www.evethemes.com/demo/lp/startup/demo/images/760x490x2.jpg"
            alt="teachers"
            width={760}
            height={490}
          />
        </div>

        <div className="w-full py-[1rem] xl:w-[50%] ">
          <h4 className="text-[1.2rem] font-semibold text-[#002639]">
            WHAT WE DO
          </h4>
          <p className="mb-[1rem]">
            Are you ready to dive into the depths of the Bible's wisdom? With
            our Bible Searcher app, finding keywords in the holy scriptures has
            never been easier. Uncover hidden truths, gain deeper insights, and
            embark on a spiritual journey with this powerful keyword-finding
            tool.
          </p>

          <p>
            Strengthen your faith with Bible Keyword Connect, a cutting-edge app
            designed to help you explore the Bible in a profound way. Unite with
            the teachings of the Holy Scriptures through seamless keyword
            searches. As you encounter life-changing verses, let the app be your
            guide to cultivating a deeper relationship with God.
          </p>
          <div className="flex items-center gap-[1rem] pb-[2rem] pt-[2rem]">
            <img
              src="http://www.evethemes.com/demo/lp/startup/demo/images/24x24x1.png"
              alt="icon"
              width={24}
              height={24}
            />
            <span> Experienced Solutions</span>
          </div>
          <div className="flex items-center gap-[1rem] pb-[2rem]">
            <img
              src="http://www.evethemes.com/demo/lp/startup/demo/images/24x24x2.png"
              alt="icon"
              width={24}
              height={24}
            />
            <span> Marketing And Branding</span>
          </div>
          <div className="flex items-center gap-[1rem]">
            <img
              src="http://www.evethemes.com/demo/lp/startup/demo/images/24x24x3.png"
              alt="icon"
              width={24}
              height={24}
            />
            <span> Best Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
