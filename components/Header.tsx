import React from 'react';
import Logo1White from '../public/Logo1White.png';
import Image from 'next/image';
import CustomText from './CustomText';
import linkedin from '../public/linkedin.png';
import twitter from '../public/X.png';
import github from '../public/github.png';
import sun from '../public/sun.png';
import Link from 'next/link';

const Header = () => {
  const textStyle = {
    fontSize: 16,
    marginLeft: 40,
    color: '#C5C5C5',
  };
  return (
    <nav
      style={{
        backgroundColor: 'rgba(24, 24, 29, 0.3)',
      }}
      className='hidden md:w-[1024px] md:h-[60px] md:flex md:flex-row  md:justify-between md:items-center md:self-center md:rounded-xl md:mt-8 md:z-10'
    >
      <div className='p-4 flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center'>
          <Image
            loading='lazy'
            width={64}
            height={26}
            alt='logo'
            src={Logo1White}
          />
          <CustomText fontWeight={500} style={textStyle}>
            About
          </CustomText>
          <CustomText fontWeight={500} style={textStyle}>
            Work
          </CustomText>
          <CustomText fontWeight={500} style={textStyle}>
            Notebook
          </CustomText>
          <CustomText fontWeight={500} style={textStyle}>
            Contact
          </CustomText>
          <CustomText fontWeight={500} style={textStyle}>
            More
          </CustomText>
        </div>
        <div className='flex flex-row items-center'>
          <Link
            href={'https://www.linkedin.com/in/kaan-mert-ko%C3%A7-2a57b5202/'}
            target='_blank'
          >
            <Image
              loading='lazy'
              width={24}
              height={24}
              className='opacity-75'
              alt='linkedin'
              src={linkedin}
            />
          </Link>
          <Image
            loading='lazy'
            width={24}
            height={24}
            className='ml-6 opacity-75'
            alt='twitter'
            src={twitter}
          />
          <Link href={'https://www.github.com/kaanmertkoc'}>
            <Image
              loading='lazy'
              width={24}
              height={24}
              className='ml-6 opacity-75'
              alt='github'
              src={github}
            />
          </Link>
          <div
            className='w-[1px] h-6 ml-6 '
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
            }}
          />
          <Image
            loading='lazy'
            width={24}
            height={24}
            className='ml-6 opacity-75'
            alt='sun'
            src={sun}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
