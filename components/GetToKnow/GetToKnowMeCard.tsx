import React from 'react';
import { AboutMeCard } from '@/interfaces/AboutMeCard';
import CustomText from '../common/CustomText';
import Image from 'next/image';

type GetToKnowMeCardProps = {
  aboutMe: AboutMeCard;
};

const GetToKnowMeCard = ({ aboutMe }: GetToKnowMeCardProps) => {
  const titleStyle = {
    fontSize: 32,
    color: '#fff',
    marginTop: 60,
  };

  const subtitleStyle = {
    fontSize: 16,
    color: '#808080',
    marginTop: '16',
  };

  return (
    <div className='relative flex flex-col items-center w-[504px] h-[504px] bg-[#151515] rounded-2xl transition duration-500 hover:scale-110 cursor-pointer hover:shadow-white hover:drop-shadow-sm hover:shadow-sm hover:z-10'>
      <CustomText fontWeight={700} style={titleStyle}>
        {aboutMe.title}
      </CustomText>
      <CustomText fontWeight={500} style={subtitleStyle}>
        {aboutMe.subtitle}
      </CustomText>
      <Image
        src={aboutMe.image}
        width={504}
        height={365}
        loading='lazy'
        className='absolute bottom-0'
        alt='about-me-card-image'
      />
    </div>
  );
};

export default GetToKnowMeCard;
