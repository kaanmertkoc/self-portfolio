import React from 'react';
import CustomText from './CustomText';
import { SelectedWorks as works } from '../utils/selectedWorks';
import { SelectedWork } from '../interfaces/SelectedWork';
import SelectedWorkCard from './SelectedWorkCard';

interface SelectedWorksProps {}

const SelectedWorks: React.FC<SelectedWorksProps> = ({}) => {
  return (
    <div className='mt-[120px] self-center w-[1024px]'>
      <CustomText fontWeight={700} style={{ fontSize: 48, color: '#fff' }}>
        Selected Works
      </CustomText>
      <div className='mt-8'>
        {works?.map((work: SelectedWork, index: number) => {
          return <SelectedWorkCard selectedWork={work} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SelectedWorks;
