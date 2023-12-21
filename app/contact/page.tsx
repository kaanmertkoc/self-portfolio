import CustomText from '../../components/CustomText';
import NewMessageWindow from '../../components/NewMessageWindow';
import Socials from '../../components/Socials';

export default function ContactPage() {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <div className='w-[1024px] items-center mt-32'>
        <CustomText fontWeight={700} style={{ fontSize: 80, color: '#fff' }}>
          Get in touch
        </CustomText>
        <CustomText
          fontWeight={400}
          style={{ fontSize: 24, opacity: 0.5, marginTop: 5, color: '#808080' }}
        >
          Let’s build something awesome.
        </CustomText>
      </div>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          height: 2,
        }}
        className='mt-16 w-screen'
      />
      <NewMessageWindow />
      <Socials />
    </div>
  );
}
