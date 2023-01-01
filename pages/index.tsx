import type { NextPage } from 'next';
import WIPBackground from '../components/WIPBackground';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen bg-slate-300 dark:bg-zinc-900'>
      <Navbar />
      <WIPBackground />
    </div>
  );
};

export default Home;
