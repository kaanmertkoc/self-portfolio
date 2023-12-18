import Image from 'next/image';
import React from 'react';
import GradientImage from '../public/fg_new.png';

const FooterGradient = () => {
  return (
    <div className='absolute z-0 self-center'>
      <Image
        loading='lazy'
        width={1440}
        height={550}
        alt='gradient'
        src={GradientImage}
      />
    </div>
  );
};

export default FooterGradient;
