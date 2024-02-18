import Image from 'next/image';
import BackgroundGradient from '@/public/BackgroundGradient.png';

const HeaderGradient = () => {
  return (
    <div className='absolute top-0 z-0 self-center h-[550px]'>
      <Image
        loading='lazy'
        width={1440}
        height={550}
        alt='gradient'
        src={BackgroundGradient}
      />
    </div>
  );
};

export default HeaderGradient;
