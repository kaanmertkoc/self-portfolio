import Logo1White from '@/public/Logo1White.png';
import Image from 'next/image';
import CustomLink from '../common/CustomLink';
import CustomText from '../common/CustomText';
import FooterGradient from './FooterGradient';

const Footer = () => {
  return (
    <footer className='relative w-screen flex flex-col items-center justify-center py-4 z-10'>
      <div
        className='w-screen self-center h-[1px]'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.10)',
        }}
      />
      <div className='w-[1024px] flex flex-row items-start justify-between mt-20'>
        <div>
          <Image
            loading='lazy'
            width={92}
            height={38}
            alt='logo'
            src={Logo1White}
          />
          <CustomLink
            href='https://open.spotify.com/playlist/0QSf6djYZ4q4aMrSSFTdpR?si=2b7591da2b984a54'
            text='Same song and dance.'
            textStyle={{
              marginTop: 16,
              color: 'rgba(128, 128, 128, 0.5)',
              fontSize: 14,
            }}
            textFontWeight={400}
          />

          <CustomText
            style={{
              marginTop: 93,
              color: 'rgba(128, 128, 128, 0.5)',
              fontSize: 14,
            }}
            fontWeight={400}
          >
            © {new Date().getFullYear()} Kaan Mert Koç. All Rights Reserved.
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
            <CustomLink
              href='/projects'
              text='Projects'
              textStyle={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              textFontWeight={400}
            />
            <CustomLink
              href='/techStack'
              text='Tech Stack'
              textStyle={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              textFontWeight={400}
            />
            <CustomLink
              href='/contact'
              text='Contact'
              textStyle={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              textFontWeight={400}
            />
          </div>
          <div className='flex flex-col items-start justify-start ml-24'>
            <CustomText
              style={{
                color: '#fff',
                fontSize: 16,
              }}
              fontWeight={700}
            >
              Elsewhere
            </CustomText>
            <CustomLink
              href='https://www.linkedin.com/in/kaan-mert-ko%C3%A7-2a57b5202/'
              text='LinkedIn'
              textStyle={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 32,
              }}
              textFontWeight={400}
            />
            <CustomLink
              href='https://www.x.com/kaanmertkoc'
              text='Twitter'
              textStyle={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              textFontWeight={400}
            />
            <CustomLink
              href='https://www.github.com/kaanmertkoc'
              text='GitHub'
              textStyle={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              textFontWeight={400}
            />
            <CustomLink
              href='https://www.discord.com/users/kaanmertkoc#0001'
              text='Discord'
              textStyle={{
                color: '#C5C5C5',
                fontSize: 16,
                marginTop: 16,
              }}
              textFontWeight={400}
            />
          </div>
        </div>
      </div>
      <FooterGradient />
    </footer>
  );
};

export default Footer;
