import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const temp = {};

  return (
    <footer className='h-auto w-full bg-slate-300 dark:bg-zinc-900 border-t dark:border-slate-700/50 border-slate-900/10'>
      <div
        className='grid w-3/5 my-0 mx-auto py-10'
        style={{
          gridTemplateAreas: `'about none contact'`,
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <div
          className='flex flex-col items-end gap-2'
          style={{ gridArea: 'about' }}
        >
          <span className='flex items-center w-full'>
            <p className='text-center font-bold'>More of me:</p>
          </span>
          <span className='flex items-center w-full'>
            <Link
              className='text-center'
              href={'https://www.linkedin.com/in/erik-menkin-lysfjord/'}
            >
              LinkedIn
            </Link>
          </span>
          <span className='flex items-center w-full'>
            <Link
              className='text-center'
              href={'https://github.com/ErikMLysfjord'}
            >
              Github
            </Link>
          </span>
        </div>
        <div
          className='flex flex-col items-end justify-self-end justify-end gap-2'
          style={{ gridArea: 'contact' }}
        >
          <span className='flex items-center w-full'>
            <span className='font-bold'>Contact me:</span>
          </span>
          <span className='flex items-center w-full'>
            <a href='mailTo:erik.menkin@lysfjord.no'>erik.menkin@lysfjord.no</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
