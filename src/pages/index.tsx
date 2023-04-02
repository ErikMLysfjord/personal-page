import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Erik Menkin Lysfjord</title>
        <meta name='description' content='Portfolio page' />
      </Head>
      <div
        /* style={{ backgroundColor: '#FCDA9A' }} */
        className='h-screen w-screen '
      >
        {/* <TextAnimator
          header='Hey, my name is Erik Menkin Lysfjord'
          text='Scroll to learn more about me'
        /> */}
        <Hero />
        <About />
      </div>
      {/* <FunFactComponent /> */}
    </>
  );
};

export default Home;
