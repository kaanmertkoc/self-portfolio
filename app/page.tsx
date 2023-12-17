import Image from 'next/image';
import CustomText from '../components/CustomText';
import IntroductionComponent from '../components/IntroductionComponent';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <IntroductionComponent />
    </main>
  );
}
