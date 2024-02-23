import React from 'react';
import CustomText from '../common/CustomText';
import memoji from '@/public/memoji.png';
import Image from 'next/image';

interface IntroductionComponentProps {}

const IntroductionComponent: React.FC<IntroductionComponentProps> = ({}) => {
  return (
    <div className='md:w-[1000px] w-full flex flex-col items-start md:mt-24 mt-16'>
      <div className='flex flex-row items-center'>
        <CustomText
          className='md:text-[80px] text-4xl'
          fontWeight={700}
          style={{ color: '#808080' }}
        >
          I'm
        </CustomText>
        <CustomText
          fontWeight={700}
          className='md:text-[80px] text-4xl ml-2 md:ml-5 text-white'
        >
          {' '}
          Kaan Mert Koç
        </CustomText>
      </div>
      <CustomText
        fontWeight={500}
        className='md:text-2xl text-[15px] md:w-[700px] md:mt-10 mt-3'
        style={{
          color: '#808080',
        }}
      >
        A full-stack engineer and mobile app developer helping startups turn
        their visions into a digital reality. I specialize in developing and
        building modern mobile and web-based apps.
      </CustomText>

      <div className='flex flex-col md:flex-row items-center mt-10 w-full'>
        <div className='w-full md:w-[196px] h-[60px] px-8 py-4 bg-gradient-to-b from-zinc-900 to-neutral-900 rounded-[9px] shadow-inner justify-center items-center gap-2 inline-flex transition duration-500 hover:scale-105 cursor-pointer hover:shadow-slate-400 hover:drop-shadow-sm hover:shadow-sm'>
          <CustomText
            fontWeight={500}
            style={{
              fontSize: 18,
            }}
          >
            See my resume
          </CustomText>
        </div>

        <div className='w-full mt-4 md:w-[170px] h-[60px] md:px-8 md:py-4 bg-gradient-to-b from-zinc-900 to-neutral-900 rounded-[9px] shadow-inner justify-center items-center gap-2 inline-flex md:ml-4 transition duration-500 hover:scale-105 cursor-pointer hover:shadow-slate-400 hover:drop-shadow-sm hover:shadow-sm'>
          <CustomText
            fontWeight={500}
            style={{
              fontSize: 18,
              color: '#808080',
            }}
          >
            Get in touch
          </CustomText>
        </div>
      </div>
      <div className='hidden md:absolute right-52 top-36 w-[540px] h-[540px]'>
        <Image
          loading='lazy'
          width={540}
          height={540}
          src={memoji}
          alt='memoji'
        />
      </div>
    </div>
  );
};

export default IntroductionComponent;
