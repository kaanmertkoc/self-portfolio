import Image from 'next/image';
import CustomText from '../components/CustomText';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <CustomText fontWeight={400} style={{ fontSize: 48 }}>
        Hello World!
      </CustomText>
    </main>
  );
}
