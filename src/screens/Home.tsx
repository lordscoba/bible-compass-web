const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <OurServices />
    </div>
  );
};

export default Home;

const Hero = () => {
  return (
    <div className={` w-full  h-[60rem] mb-[3rem]`}>
      <div className="hero">
        <section
          className={`w-full xl:w-[50%] lg:w-[50%] md:w-[70%] pt-[25rem] ml-auto  md:text-center text-center xl:text-start`}
        >
          <div className={`w-full xl:w-[40rem]`}>
            <h5 className="font-bold text-[1.3rem] text-[#35B3EB] mb-1">
              Business Startup
            </h5>
            <p className="text-[2.5rem] font-semibold mb-2">
              PREMIUM HTML TEMPLATE
            </p>

            <p className="mb-[3rem]">
              Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
              lacinia ultrices. commodo tristique. Duis lacus urna, condimentum
              a vehicula a, hendrerit ac nisi lorem ipsum dolor sit amet
              vulputate
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

const OurServices = () => {
  return (
    <div className={`my-[2rem]`}>
      <h2 className="text-center font-medium text-[2.5rem]">OUR SERVICES</h2>
      <div className="w-[9rem] h-1 bg-[#35B3EB] m-auto rounded-sm"></div>
    </div>
  );
};
