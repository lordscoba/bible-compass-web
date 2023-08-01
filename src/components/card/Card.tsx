export const cardData = [
  {
    header: "Categories",
    body: "You can find headings which  includes Career, Family/Marriage, Finance, Relationship and Spirituality",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x1.png",
  },
  {
    header: "Find Keywords",
    body: "You can search for keywords that pertains to any relevant  topic of your choice.",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x2.png",
  },
  {
    header: "Bible Verses",
    body: "Read verses that explain the topics of your choice",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x3.png",
  },
  {
    header: "Favorite",
    body: "You can bookmark favorite keywords for easier use",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x4.png",
  },
  {
    header: "Bible",
    body: "A bible incorporated into the app for user's edification.",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x5.png",
  },
  {
    header: "Effective Payment System",
    body: "Paystack payment system integrated into the website for effective payments",
    icon: "http://www.evethemes.com/demo/lp/startup/demo/images/64x64x5.png",
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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center p-5">
      {dataArray?.length > 0
        ? dataArray?.map((item: Props, index: any) => {
            return (
              <div key={index} className="w-full flex flex-col items-center">
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
