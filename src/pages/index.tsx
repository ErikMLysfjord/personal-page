import type { NextPage } from 'next';
import Head from 'next/head';
import About from './About';
import Hero from './Hero';
import ProjectsPage from './Projects';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Erik Menkin Lysfjord</title>
        <meta name='description' content='Portfolio page' />
      </Head>
      <div className='h-screen w-screen overflow-auto snap-y snap-mandatory'>
        <Hero />
        <About />
        <ProjectsPage />
      </div>
    </>
  );
};

export default Home;
