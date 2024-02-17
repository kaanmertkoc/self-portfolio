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
      className='transition duration-500 hover:scale-110  relative w-[330px] h-[330px] bg-[#181818] rounded-[22px] flex flex-col items-center justify-center'
    >
      <Image width={114} height={114} src={techStack.icon} alt='techStack' />
      <div className='absolute bottom-4 w-[90%] flex flex-row items-center justify-between mt-10'>
        <CustomText fontWeight={600} style={{ fontSize: 20, color: '#fff' }}>
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
            style={{ fontSize: 14, color: '#808080' }}
          >
            {techStack.category}
          </CustomText>
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
