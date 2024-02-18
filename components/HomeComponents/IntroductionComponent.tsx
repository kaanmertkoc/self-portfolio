import React from 'react';
import CustomText from '../common/CustomText';
import memoji from '@/public/memoji.png';
import Image from 'next/image';

interface IntroductionComponentProps {}

const IntroductionComponent: React.FC<IntroductionComponentProps> = ({}) => {
  return (
    <div className='w-[1000px] flex flex-col items-start mt-24'>
      <div className='flex flex-row items-center'>
        <CustomText fontWeight={700} style={{ fontSize: 80, color: '#808080' }}>
          I'm
        </CustomText>
        <CustomText
          fontWeight={700}
          style={{ fontSize: 80, color: '#fff', marginLeft: 20 }}
        >
          {' '}
          Kaan Mert Koç
        </CustomText>
      </div>
      <CustomText
        fontWeight={500}
        style={{
          fontSize: 24,
          color: '#808080',
          marginTop: 40,
          width: 700,
        }}
      >
        A full-stack engineer and mobile app developer helping startups turn
        their visions into a digital reality. I specialize in developing and
        building modern mobile and web-based apps.
      </CustomText>

      <div className='flex flex-row items-center mt-10'>
        <div className='w-[196px] h-[60px] px-8 py-4 bg-gradient-to-b from-zinc-900 to-neutral-900 rounded-[9px] shadow-inner justify-center items-center gap-2 inline-flex transition duration-500 hover:scale-105 cursor-pointer hover:shadow-slate-400 hover:drop-shadow-sm hover:shadow-sm'>
          <CustomText
            fontWeight={500}
            style={{
              fontSize: 18,
            }}
          >
            See my resume
          </CustomText>
        </div>

        <div className='w-[170px] h-[60px] px-8 py-4 bg-gradient-to-b from-zinc-900 to-neutral-900 rounded-[9px] shadow-inner justify-center items-center gap-2 inline-flex ml-4 transition duration-500 hover:scale-105 cursor-pointer hover:shadow-slate-400 hover:drop-shadow-sm hover:shadow-sm'>
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
      <div className='absolute right-52 top-36 w-[540px] h-[540px]'>
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
