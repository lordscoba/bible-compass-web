import { useEffect, useState } from "react";
import { Card } from "../card";
import { cardData } from "../card/Card";

const OurServices = () => {
  const [data, setData] = useState<{
    icon: string;
    header: string;
    body: string;
  }>() as any;

  useEffect(() => {
    setData(cardData);
  }, []);
  return (
    <div className={`my-[2rem]`}>
      <h2 className="text-center font-medium text-[2.5rem]">OUR SERVICES</h2>
      <div className="w-[9rem] h-1 bg-[#35B3EB] m-auto rounded-sm"></div>
      <Card dataArray={data} />
    </div>
  );
};

export default OurServices;
