type Props = {
  image: string;
  header: string;
  body: string;
};

export type DataArrayTypes = {
  dataArray: Array<Props>;
};

const OurEnviromentCard = ({ dataArray }: DataArrayTypes) => {
  return (
    <div className="mt-[5rem] mb-[6rem]">
      <div className="w-full xl:w-[80%] block xl:flex items-center gap-4 m-auto px-[30px]">
        {dataArray?.length > 0
          ? dataArray?.map((item: Props, index: any) => {
              return (
                <div
                  key={index}
                  className="bg-[#ececec] overflow-hidden hover:border hover:border-[#35B3EB] hover:rounded-lg mb-[2rem] xl:mb-0 "
                >
                  <div className="mb-[1.5rem] ">
                    <img
                      src={item?.image}
                      alt="teacher"
                      width={400}
                      height={330}
                      className="hover:scale-125 transition-transform hover:-z-20 w-full"
                    />
                  </div>
                  <div className=" p-[23px]">
                    <h4 className="text-[1.2rem] font-semibold text-[#002639]">
                      {item?.header}
                    </h4>
                    <p>{item?.body}</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default OurEnviromentCard;
