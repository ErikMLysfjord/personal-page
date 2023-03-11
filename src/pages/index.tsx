import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import TextAnimator from '../components/TextAnimator';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Erik Menkin Lysfjord</title>
        <meta name='description' content='Portfolio page' />
      </Head>
      <div className='h-screen w-screen bg-slate-300 dark:bg-zinc-900'>
        <TextAnimator
          header='Hey, my name is Erik Menkin Lysfjord'
          text='Scroll to learn more about me'
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
