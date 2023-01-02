import React from 'react';
import useDate from './useDate';
import DarkmodeButton from './DarkmodeButton';

function Navbar() {
  const { date, time, wish } = useDate();

  return (
    <div
      className='w-full sticky dark:border-slate-700/30 border-slate-900/10 border-b top-0 h-16 opacity-95 z-20 text-white text-center p-0 text-black dark:text-white backdrop-blur-sm'
      style={{ lineHeight: '4rem' }}
    >
      <div className='flex flex-row align-middle justify-between md:max-w-2xl lg:max-w-4xl max-w-xs mx-auto'>
        <p>Heisann!</p>
        <div>{date}</div>
        <DarkmodeButton />
      </div>
    </div>
  );
}

export default Navbar;
