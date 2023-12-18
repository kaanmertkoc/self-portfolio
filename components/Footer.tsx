import Image from 'next/image';
import Logo1White from '../public/Logo1White.png';
import CustomText from './CustomText';
import FooterGradient from './FooterGradient';

const Footer = () => {
  return (
    <footer className='w-screen flex flex-col items-center justify-center py-4 z-10'>
      <div
        className='w-screen self-center h-[1px]'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.10)',
        }}
      />
      <div className='w-[1024px] flex flex-row items-start justify-between mt-20'>
        <div>
          <Image width={92} height={38} alt='logo' src={Logo1White} />
          <CustomText
            style={{
              marginTop: 16,
              color: 'rgba(128, 128, 128, 0.5)',
              fontSize: 14,
            }}
            fontWeight={400}
          >
            Same song and dance.
          </CustomText>
          <CustomText
            style={{
              marginTop: 93,
              color: 'rgba(128, 128, 128, 0.5)',
              fontSize: 14,
            }}
            fontWeight={400}
          >
            © 2023 Kaan Mert Koç. All Rights Reserved.
          </CustomText>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-col items-start justify-start'>
            <CustomText
              style={{
                color: '#fff',
                fontSize: 16,
              }}
              fontWeight={700}
            >
              Links
            </CustomText>
            <CustomText
              style={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 32,
              }}
              fontWeight={400}
            >
              About
            </CustomText>
            <CustomText
              style={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              fontWeight={400}
            >
              Work
            </CustomText>
            <CustomText
              style={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              fontWeight={400}
            >
              Tech Stack
            </CustomText>
            <CustomText
              style={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              fontWeight={400}
            >
              Contact
            </CustomText>
          </div>
          <div className='flex flex-col items-start justify-start ml-32'>
            <CustomText
              style={{
                color: '#fff',
                fontSize: 16,
              }}
              fontWeight={700}
            >
              Elsewhere
            </CustomText>
            <CustomText
              style={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 32,
              }}
              fontWeight={400}
            >
              Email
            </CustomText>
            <CustomText
              style={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              fontWeight={400}
            >
              Linkedin
            </CustomText>
            <CustomText
              style={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              fontWeight={400}
            >
              GitHub
            </CustomText>
            <CustomText
              style={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              fontWeight={400}
            >
              Discord
            </CustomText>
          </div>
        </div>
      </div>
      <FooterGradient />
    </footer>
  );
};

export default Footer;
