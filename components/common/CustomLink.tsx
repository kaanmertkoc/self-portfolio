import Link from 'next/link';
import CustomText from './CustomText';
import Image from 'next/image';
interface CustomLinkProps {
  href: URL | string;
  textFontWeight?: number;
  linkStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  isIcon?: boolean;
  iconWidth?: number;
  iconHeight?: number;
  iconStyles?: React.CSSProperties;
  iconSrc?: string;
  iconAlt?: string;
  text?: string;
}

const CustomLink = ({
  href,
  textFontWeight,
  linkStyle,
  textStyle,
  isIcon,
  iconWidth,
  iconHeight,
  iconStyles,
  iconSrc,
  iconAlt,
  text,
}: CustomLinkProps) => {
  return (
    <Link href={href} target={!isIcon ? '_self' : '_blank'} style={linkStyle}>
      {isIcon ? (
        <Image
          loading='lazy'
          width={iconWidth ?? 24}
          height={iconHeight ?? 24}
          src={iconSrc!}
          style={iconStyles}
          alt={iconAlt ?? ''}
        />
      ) : (
        <CustomText fontWeight={textFontWeight} style={textStyle}>
          {text}
        </CustomText>
      )}
    </Link>
  );
};

export default CustomLink;
