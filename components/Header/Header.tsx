import github from '@/public/Github.png';
import linkedin from '@/public/LinkedIn.png';
import Logo1White from '@/public/Logo1White.png';
import sun from '@/public/Sun.png';
import twitter from '@/public/X.png';
import Image from 'next/image';
import Link from 'next/link';
import CustomText from '../common/CustomText';

const Header = () => {
  const textStyle = {
    fontSize: 16,
    marginLeft: 40,
    color: '#C5C5C5',
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: 'rgba(24, 24, 29, 0.3)',
        }}
        className='hidden md:w-[1024px] md:h-[60px] md:flex md:flex-row  md:justify-between md:items-center md:self-center md:rounded-xl md:mt-8 md:z-10'
      >
        <div className='p-4 flex flex-row items-center justify-between w-full'>
          <div className='flex flex-row items-center'>
            <Link href={'/'}>
              <Image
                loading='lazy'
                width={64}
                height={26}
                alt='logo'
                src={Logo1White}
              />
            </Link>
            <CustomText fontWeight={500} style={textStyle}>
              About
            </CustomText>

            <Link href={'/techStack'}>
              <CustomText fontWeight={500} style={textStyle}>
                Tech Stack
              </CustomText>
            </Link>
            <Link href={'/contact'}>
              <CustomText fontWeight={500} style={textStyle}>
                Contact
              </CustomText>
            </Link>
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
            <Link href={'https://www.x.com/kaanmertkoc'} target='_blank'>
              <Image
                loading='lazy'
                width={24}
                height={24}
                className='ml-6 opacity-75'
                alt='twitter'
                src={twitter}
              />
            </Link>
            <Link target='_blank' href={'https://www.github.com/kaanmertkoc'}>
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
      <nav className='md:hidden w-full h-[60px] flex flex-row justify-between items-center self-center rounded-xl mt-8 z-10'>
        <div className='relative p-4 flex flex-row items-center justify-center w-full'>
          <Link href={'/'}>
            <Image
              loading='lazy'
              width={64}
              height={26}
              alt='logo'
              src={Logo1White}
            />
          </Link>
          <Image
            loading='lazy'
            width={24}
            height={24}
            className='absolute right-6 ml-6 opacity-75'
            alt='sun'
            src={sun}
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
