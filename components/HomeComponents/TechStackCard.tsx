import React from 'react';
import { TechStackCardInterface } from '../../interfaces/TechStackCard';
import Image from 'next/image';
import CustomText from '../common/CustomText';

type TechStackCardProps = {
  techStack: TechStackCardInterface;
  style?: React.CSSProperties;
};
const TechStackCard = ({ techStack, style }: TechStackCardProps) => {
  return (
    <div
      style={{
        border: '1px solid #383737',
      }}
      className='mt-4 flex flex-row items-center transition duration-500 hover:scale-110 relative w-full md:w-[330px] md:h-[330px] bg-[#181818] rounded-[22px] md:justify-center md:flex md:flex-col md:items-center justify-start'
    >
      <Image
        src={techStack.icon}
        alt='techStack'
        className='order-1 w-16 h-16 md:h-28 md:w-28 ml-4'
      />
      <div className='md:absolute bottom-4 w-full md:w-[90%] flex flex-row items-center justify-between mt-10 order-2'>
        <CustomText
          className='text-[16px] md:text-[20px] text-white'
          fontWeight={600}
        >
          {techStack.title}
        </CustomText>
        <div
          style={{
            border: '1px solid #272525',
          }}
          className='pt-2 pb-2 pr-3 pl-3 rounded-[26px] bg-[#181818]'
        >
          <CustomText
            fontWeight={400}
            className='text-[11px] md:text-[14px] text-[#808080]'
          >
            {techStack.category}
          </CustomText>
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
