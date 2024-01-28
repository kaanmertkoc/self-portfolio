import Link from 'next/link';
import React from 'react';
import CustomText from './CustomText';

type CustomLinkProps = {
  href: string;
  linkStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  target?: string;
  text: string;
  textFontWeight?: number;
};

const CustomLink = ({
  href,
  linkStyle,
  textFontWeight,
  textStyle,
  text,
  target,
}: CustomLinkProps) => {
  return (
    <Link
      href={href}
      target={target ?? '_blank'}
      style={linkStyle}
      className='transition duration-500 hover:scale-110'
    >
      <CustomText fontWeight={textFontWeight!} style={textStyle}>
        {text}
      </CustomText>
    </Link>
  );
};

export default CustomLink;
