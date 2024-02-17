import React from 'react';
import CustomText from '../../components/common/CustomText';
import { SelectedWorks } from '../../utils/selectedWorks';
import { SelectedWork } from '../../interfaces/SelectedWork';
import SelectedWorkCard from '../../components/SelectedWorks/SelectedWorkCard';
import StarsIcon from '../../public/Stars.png';
import SendIcon from '../../public/Send.png';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <div className='w-[1024px] items-center mt-32'>
        <CustomText fontWeight={700} style={{ fontSize: 80, color: '#fff' }}>
          Projects
        </CustomText>
        <CustomText
          fontWeight={400}
          style={{ fontSize: 24, opacity: 0.5, marginTop: 5, color: '#808080' }}
        >
          Projects and ideas I’ve worked on{' '}
        </CustomText>
      </div>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          height: 2,
        }}
        className='mt-16 w-screen'
      />
      <div className='mt-8'>
        {SelectedWorks?.map((work: SelectedWork, index: number) => {
          return <SelectedWorkCard selectedWork={work} key={index} />;
        })}
      </div>
      <div
        style={{
          width: 1024,
          height: 565,
          borderRadius: '32px',
          borderWidth: '1px',
          border: '1px dashed #383737',
          backgroundColor: 'rgba(21, 21, 21, 0.50)',
        }}
        className='flex flex-col items-center justify-center mt-6'
      >
        <Image width={106} height={106} src={StarsIcon} alt='plus' />
        <CustomText
          fontWeight={700}
          style={{ fontSize: 32, color: '#fff', marginTop: 16 }}
        >
          YOUR PROJECT GOES HERE
        </CustomText>
        <CustomText
          fontWeight={400}
          style={{
            fontSize: 16,
            opacity: 0.5,
            marginTop: 16,
            color: '#808080',
          }}
        >
          Let’s turn your idea into a visual reality
        </CustomText>
        <div className='mt-[90px]'>
          <div
            style={{
              boxShadow:
                '0px 7px 4px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(255, 255, 255, 0.08) inset, 0px 1px 2px 0px rgba(255, 255, 255, 0.02) inset',
              borderRadius: '9px',
            }}
            className='transition duration-500 hover:scale-110  hover:shadow-white hover:drop-shadow-sm hover:shadow-sm'
          >
            <div className=' flex flex-row items-center pt-4 pb-4 pl-8 pr-8 cursor-pointer'>
              <Image width={24} height={24} src={SendIcon} alt='send' />
              <CustomText
                fontWeight={500}
                style={{ fontSize: 16, color: '#fff', marginLeft: 8 }}
              >
                Get in touch
              </CustomText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
