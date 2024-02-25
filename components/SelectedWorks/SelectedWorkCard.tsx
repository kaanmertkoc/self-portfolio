import React from 'react';
import { SelectedWork } from '../../interfaces/SelectedWork';
import Image from 'next/image';
import CustomText from '../common/CustomText';
type SelectedWorkCardProps = {
  selectedWork: SelectedWork;
};

const SelectedWorkCard: React.FC<SelectedWorkCardProps> = ({
  selectedWork,
}) => {
  return (
    <div
      style={{
        border: '1px solid #383737',
      }}
      className='flex flex-row items-center justify-start w-full md:w-[1024px] rounded-[32px]  bg-[#181818] mt-8 relative z-1'
    >
      <div className='md:w-[500px] flex flex-col items-start justify-start md:ml-16 md:mt-16 md:mb-16 ml-8 mt-8 mb-8'>
        <Image
          loading='lazy'
          width={70}
          height={70}
          alt='logo'
          src={selectedWork.logo}
        />
        <CustomText
          className='mt-4 md:text-[32px] text-[20px]'
          fontWeight={700}
        >
          {selectedWork.name}
        </CustomText>
        <CustomText
          style={{ marginTop: 16, fontSize: 16, color: '#808080' }}
          fontWeight={400}
        >
          {selectedWork.description}
        </CustomText>
        <CustomText style={{ marginTop: 16, fontSize: 16 }} fontWeight={400}>
          Download App
        </CustomText>
      </div>
      <Image
        loading='lazy'
        width={300}
        height={600}
        alt='logo'
        src={selectedWork.example}
        className='hidden md:absolute right-0 rotate-6 bottom-[-10px] z-0'
      />
    </div>
  );
};

export default SelectedWorkCard;
