import React from 'react';
import CustomText from '../common/CustomText';
import CustomButton from '../common/CustomButton';
import SendImage from '@/public/Send.png';
import Image from 'next/image';

const WorkTogether = () => {
  const headerTitleStyle = {
    fontSize: 48,
    color: '#fff',
  };
  const subtitleStyle = {
    fontSize: 20,
    maxWidth: 500,
    color: '#808080',
    opacity: 0.5,
    marginTop: 5,
  };

  return (
    <div className='mt-20 flex flex-row justify-between items-center w-[1024px]'>
      <div>
        <CustomText fontWeight={700} style={headerTitleStyle}>
          Let's work together
        </CustomText>
        <CustomText fontWeight={400} style={subtitleStyle}>
          Want to discuss an opportunity to create something great? I’m ready
          when you are.
        </CustomText>
      </div>
      <CustomButton
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 9,
        }}
      >
        <Image
          src={SendImage}
          style={{ marginRight: 8 }}
          width={24}
          height={24}
          alt='send-image'
        />

        <CustomText fontWeight={500} style={{ fontSize: 18, color: 'white' }}>
          Get in touch
        </CustomText>
      </CustomButton>
    </div>
  );
};

export default WorkTogether;
