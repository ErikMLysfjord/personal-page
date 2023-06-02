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
      <div className='h-screen w-screen'>
        <Hero />
        <About />
      </div>
    </>
  );
};

export default Home;
