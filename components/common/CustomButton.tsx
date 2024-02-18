import React from 'react';

type CustomButtonProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const CustomButton = ({ children, style }: CustomButtonProps): JSX.Element => {
  return (
    <button
      style={style}
      className='flex flex-row items-center justify-center px-8 py-4 bg-[#151515] rounded-2xl transition duration-500 hover:scale-110 cursor-pointer hover:shadow-white hover:drop-shadow-sm hover:shadow-sm hover:z-10'
    >
      {children}
    </button>
  );
};

export default CustomButton;
