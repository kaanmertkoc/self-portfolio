import CustomText from '../../components/CustomText';
import TechStackCard from '../../components/TechStackCard';
import { devDesignStack } from '../../utils/techStack';

export default function TechStackPage() {
  return (
<<<<<<< HEAD
    <div className='flex min-h-screen flex-col items-center'>
      <div className='w-full md:w-[1024px] items-center mt-32'>
        <CustomText fontWeight={700} style={{ fontSize: 80, color: '#fff' }}>
=======
    <div className='flex w-screen md:min-h-screen flex-col items-center'>
      <div className='w-full md:w-[1024px] items-center mt-32'>
        <CustomText
          fontWeight={700}
          className='text-[48px] md:text-[88px] text-white ml-4'
        >
>>>>>>> release/0.1.9
          Tech Stack
        </CustomText>
        <CustomText
          fontWeight={400}
          className='text-[24px] md:text-[48px] text-opacity-50 text-[#808080] mt-1 ml-4 mr-4'
        >
          The dev tools, apps, devices, and games I use and play.{' '}
        </CustomText>
      </div>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          height: 2,
        }}
        className='mt-16 w-full md:w-screen'
      />
      <div className='w-full md:w-[1024px] items-center mt-12'>
        <CustomText
          fontWeight={700}
          className='text-[32px] md:text-[48px] text-[#808080] self-start ml-4'
        >
          Dev & Design
        </CustomText>
        <div className='flex flex-col md:grid md:grid-cols-3 md:gap-6 md:mt-4'>
          {devDesignStack.map((item, index) => (
            <div key={index} className=''>
              <TechStackCard techStack={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
