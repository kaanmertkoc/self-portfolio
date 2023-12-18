import GetToKnowMe from '../components/GetToKnowMe';
import IntroductionComponent from '../components/IntroductionComponent';
import SelectedWorks from '../components/SelectedWorks';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <IntroductionComponent />
      <SelectedWorks />
      <GetToKnowMe />
    </main>
  );
}
