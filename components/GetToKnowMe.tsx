import React from 'react';
import CustomText from './CustomText';

const GetToKnowMe = () => {
  return (
    <div className='w-[1024px] flex flex-col'>
      <CustomText
        fontWeight={700}
        style={{ fontSize: 48, marginTop: 100, color: '#fff' }}
      >
        Get to know me
      </CustomText>
    </div>
  );
};

export default GetToKnowMe;
