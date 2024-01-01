import CustomText from '../../components/CustomText';

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
    </div>
  );
}
