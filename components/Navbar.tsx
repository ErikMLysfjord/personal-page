import React, { useState } from 'react';
import useDate from './useDate';

function Navbar() {
  const [darkmode, toggleDarkmode] = useState(true);
  const { date, time, wish } = useDate();

  return (
    <div
      className='w-full bg-zinc-700 sticky top-0 h-16 opacity-95 text-white z-20 text-white text-center h-16 p-0'
      style={{ lineHeight: '4rem' }}
    >
      <div className='flex flex-row align-middle justify-between lg:max-w-4xl mx-auto'>
        <p>Heisann!</p>
        <div>{wish}</div>
      </div>
    </div>
  );
}

export default Navbar;
