import React from 'react';
import { SelectedWork } from '../interfaces/SelectedWork';
import Image from 'next/image';
import CustomText from './CustomText';
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
      className='flex flex-row items-center justify-start w-[1024px] rounded-[32px]  bg-[#181818] mt-8 relative z-1'
    >
      <div className='w-[500px] flex flex-col items-start justify-start ml-16 mt-16 mb-16'>
        <Image width={70} height={70} alt='logo' src={selectedWork.logo} />
        <CustomText style={{ marginTop: 16, fontSize: 32 }} fontWeight={700}>
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
        width={300}
        height={600}
        alt='logo'
        src={selectedWork.example}
        className='absolute right-0 rotate-6 bottom-[-10px] z-0'
      />
    </div>
  );
};

export default SelectedWorkCard;
