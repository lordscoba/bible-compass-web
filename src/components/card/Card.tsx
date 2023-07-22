export const cardData = [
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x1.png',
  },
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x2.png',
  },
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x3.png',
  },
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x4.png',
  },
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x5.png',
  },
  {
    header: 'LOREM IPSUM DOLOR',
    body: 'Lorem ipsum dolor sit amet, eirmod tempor invidunt ut labore et dolore diam nonumy eirmod invidunt',
    icon: 'http://www.evethemes.com/demo/lp/startup/demo/images/64x64x6.png',
  },
];

type Props = {
  icon: string;
  header: string;
  body: string;
};

type DataArrayTypes = {
  dataArray: Array<Props>;
};

const Card = ({ dataArray }: DataArrayTypes) => {
  return (
    <div className="w-full xl:w-[80%] block xl:flex md:flex flex-wrap my-12 gap-4 m-auto text-center mb-[5rem] px-[30px] xl:px-0">
      {dataArray?.length > 0
        ? dataArray?.map((item: Props, index: any) => {
            return (
              <div
                key={index}
                className="mt-9 w-full xl:w-[25rem] m-auto flex flex-col items-center"
              >
                <div className="bg-[#ececec] rounded-[50%] p-3 xl:w-[60px] w-[50px] xl:h-[60px] h-[50px] flex items-center justify-center">
                  <img
                    src={item?.icon}
                    alt="icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#ececec] w-full h-[12rem] py-[48px] px-[16px] rounded-lg hover:border hover:border-[#18a6e2]">
                  <h4 className="text-[#222] text-[1.2rem] font-semibold mb-3">
                    {item?.header}
                  </h4>
                  <p className="text-[#463e3e]">{item?.body}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Card;
