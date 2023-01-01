import React from 'react';
import useDate from './useDate';
import DarkmodeButton from './DarkmodeButton';

function Navbar() {
  const { date, time, wish } = useDate();

  return (
    <div
      className='w-full bg-slate-400 dark:bg-zinc-700 sticky top-0 h-16 opacity-95 z-20 text-white text-center h-16 p-0 text-black dark:text-white'
      style={{ lineHeight: '4rem' }}
    >
      <div className='flex flex-row align-middle justify-between lg:max-w-4xl mx-auto'>
        <p>Heisann!</p>
        <div>{date}</div>
        <DarkmodeButton />
      </div>
    </div>
  );
}

export default Navbar;
