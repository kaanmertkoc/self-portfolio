import React, { CSSProperties } from 'react';
import clsx from 'clsx';
interface CustomTextProps {
  children: React.ReactNode;
  fontWeight?: number;
  className?: string;
  style?: CSSProperties;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  fontWeight = 400,
  className,
  style,
}) => {
  const combinedStyle = { ...style, fontWeight };

  return (
    <div className={clsx('font-sf-display', className)} style={combinedStyle}>
      {children}
    </div>
  );
};

export default CustomText;
