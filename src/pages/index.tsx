import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import FunFactComponent from '../components/FunFactComponent';
import InfoBox from '../components/InfoBox';
import TextAnimator from '../components/TextAnimator';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Erik Menkin Lysfjord</title>
        <meta name='description' content='Portfolio page' />
      </Head>
      <div
        style={{ backgroundColor: '#FCDA9A' }}
        className='h-screen w-screen '
      >
        {/* <TextAnimator
          header='Hey, my name is Erik Menkin Lysfjord'
          text='Scroll to learn more about me'
        /> */}
        <InfoBox />
      </div>
      {/* <FunFactComponent /> */}
      <Footer />
    </>
  );
};

export default Home;
