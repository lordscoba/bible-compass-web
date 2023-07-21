import React from 'react';

type Props = {
  children: React.ReactNode;
  width?: any;
};

const FlexBetween = ({ children, width }: Props) => {
  return (
    <div className={`w-full flex items-center justify-between gap-[1rem]   `}>
      {children}
    </div>
  );
};

export default FlexBetween;
