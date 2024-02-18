import React from 'react';
import CustomText from '../common/CustomText';
import GetToKnowMeCard from './GetToKnowMeCard';
import { gettoknowme } from '@/utils/gettoknowme';

const GetToKnowMe = () => {
  return (
    <div className='w-[1024px] flex flex-col'>
      <CustomText
        fontWeight={700}
        style={{ fontSize: 48, marginTop: 100, color: '#fff' }}
      >
        Get to know me
      </CustomText>
      <div className='flex flex-row justify-between mt-20'>
        <GetToKnowMeCard aboutMe={gettoknowme[1]} />
        <GetToKnowMeCard aboutMe={gettoknowme[1]} />
      </div>
      <div className='flex flex-row justify-between mt-4'>
        <GetToKnowMeCard aboutMe={gettoknowme[2]} />
        <GetToKnowMeCard aboutMe={gettoknowme[3]} />
      </div>
    </div>
  );
};

export default GetToKnowMe;
