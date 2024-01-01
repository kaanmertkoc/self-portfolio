import CustomText from '../../components/CustomText';
import TechStackCard from '../../components/TechStackCard';
import { devDesignStack } from '../../utils/techStack';

export default function TechStackPage() {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <div className='w-[1024px] items-center mt-32'>
        <CustomText fontWeight={700} style={{ fontSize: 80, color: '#fff' }}>
          Tech Stack
        </CustomText>
        <CustomText
          fontWeight={400}
          style={{ fontSize: 24, opacity: 0.5, marginTop: 5, color: '#808080' }}
        >
          The dev tools, apps, devices, and games I use and play.{' '}
        </CustomText>
      </div>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          height: 2,
        }}
        className='mt-16 w-screen'
      />
      <div className='w-[1024px] items-center mt-12'>
        <CustomText
          fontWeight={700}
          style={{ fontSize: 48, color: '#808080', alignSelf: 'flex-start' }}
        >
          Dev & Design
        </CustomText>
        <div className='grid grid-cols-3 gap-6 mt-4'>
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
