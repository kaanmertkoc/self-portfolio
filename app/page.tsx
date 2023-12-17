import Image from 'next/image'
import CustomText from '../components/CustomText';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <button className='inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900'>
        Button
      </button>
      <CustomText fontWeight={400} style={{ fontSize: 48 }}>
        Hello World!
      </CustomText>
    </main>
  );
}
