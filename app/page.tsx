import GetToKnowMe from '../components/GetToKnow/GetToKnowMe';
import IntroductionComponent from '../components/HomeComponents/IntroductionComponent';
import SelectedWorks from '../components/SelectedWorks/SelectedWorks';
import WorkTogether from '../components/HomeComponents/WorkTogether';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between md:p-24 p-4'>
      <IntroductionComponent />
      <SelectedWorks />
      <GetToKnowMe />
      <WorkTogether />
    </main>
  );
}
