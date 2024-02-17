import React, { CSSProperties } from 'react';

interface CustomTextProps {
  children: React.ReactNode;
  fontWeight?: number;
  style?: CSSProperties;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  fontWeight = 400,
  style,
}) => {
  const combinedStyle = { ...style, fontWeight };

  return (
    <div className='font-sf-display' style={combinedStyle}>
      {children}
    </div>
  );
};

export default CustomText;
