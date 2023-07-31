const Hero = () => {
  return (
    <div className={` w-full  h-[60rem] mb-[3rem]`} id="home">
      <div className="hero">
        <section
          className={`w-full xl:w-[50%] lg:w-[50%] md:w-[70%] pt-[25rem] ml-auto  md:text-center text-center xl:text-start`}
        >
          <div className={`w-full xl:w-[40rem]`}>
            <h5 className="font-bold text-[1.3rem] text-[#35B3EB] mb-1">
              Bible Compass
            </h5>
            <p className="text-[2.5rem] font-medium mb-2 px-[20px] xl:px-0 text-[#002629]">
              Word of God Explorer: Search & Discover
            </p>

            <p className="mb-[3rem]">
              The Word of God Explorer app invites you on a voyage of
              revelation. Delve into the Bible's vast repository of knowledge
              and locate specific keywords that hold personal significance.
              Empower your spiritual growth, share insights with others, and
              experience the transformative power of the scriptures.
            </p>

            <button className="bg-[#35B3EB] text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#fff] hover:text-[#35B3EB] shadow-md">
              READ MORE
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
