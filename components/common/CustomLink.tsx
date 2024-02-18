import Link from 'next/link';
import CustomText from './CustomText';
import Image from 'next/image';
interface CustomLinkProps {
  href: URL;
  children: React.ReactElement<typeof CustomText | typeof Image>;
  fontWeight?: number;
  linkStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  isIcon?: boolean;
  iconWidth?: number;
  iconHeight?: number;
  iconStyles?: React.CSSProperties;
  iconSrc?: string;
  iconAlt?: string;
}

const CustomLink = ({
  href,
  fontWeight,
  linkStyle,
  textStyle,
  children,
  isIcon,
  iconWidth,
  iconHeight,
  iconStyles,
  iconSrc,
  iconAlt,
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
        <CustomText fontWeight={fontWeight} style={textStyle}>
          {children}
        </CustomText>
      )}
    </Link>
  );
};

export default CustomLink;
