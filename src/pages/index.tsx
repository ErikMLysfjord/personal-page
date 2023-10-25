import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Erik Menkin Lysfjord</title>
        <meta name='description' content='Portfolio page' />
        <link rel='icon' href='logo.svg' />
      </Head>
      <div className='h-screen w-screen'>
        <Hero />
      </div>
    </>
  );
};

export default Home;
