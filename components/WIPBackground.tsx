import React, { useState } from 'react';
import Image from 'next/image';
import ImageForBackground from '../public/IMG_1914.jpeg';

function WIPBackground() {
  return (
    <div
      className='h-full w-full flex justify-center items-center'
      style={{ backgroundColor: 'rgb(64, 54, 77)' }}
    >
      <div className='z-10 relative text-center text-7xl'>Work in Progress</div>
    </div>
  );
}

export default WIPBackground;
