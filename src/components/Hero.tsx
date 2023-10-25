import Image from 'next/image';
import Link from 'next/link';
import LinkedIn from '../../public/LinkedIn.svg';
import Github from '../../public/github-mark.svg';
import CV from '../../public/cv.svg';

const Hero = () => {
  return (
    <div className='w-full h-full z-50 relative bg-white'>
      <nav className='absolute right-0 flex flew-row p-8 justify-between w-60'>
        <Link href={'https://www.linkedin.com/in/erik-menkin-lysfjord/'}>
          <a target='_blank' rel='noopener noreferrer'>
            <div className='w-10 h-10 relative hover:cursor-pointer hover:scale-110 ease-in-out duration-200'>
              <Image
                src={LinkedIn}
                alt={'LinkedIn'}
                layout={'fill'}
                objectFit={'contain'}
              />
            </div>
          </a>
        </Link>
        <Link href={'https://github.com/ErikMLysfjord'}>
          <a target='_blank' rel='noopener noreferrer'>
            <div className='w-10 h-10 relative hover:cursor-pointer hover:scale-110 ease-in-out duration-200'>
              <Image
                src={Github}
                alt={'Github'}
                layout={'fill'}
                objectFit={'contain'}
              />
            </div>
          </a>
        </Link>
        <Link href={'/CV.pdf'}>
          <a target='_blank' rel='noopener noreferrer'>
            <div className='w-10 h-10 relative hover:cursor-pointer hover:scale-110 ease-in-out duration-200'>
              <Image
                src={CV}
                alt={'Resume'}
                layout={'fill'}
                objectFit={'contain'}
              />
            </div>
          </a>
        </Link>
      </nav>
      <div className='flex justify-center flex-col w-full h-full'>
        <div style={{ fontSize: '56px' }} className='p-10  animate-jumpIn'>
          <h1 className='font-sans'>
            Hey, my name is{' '}
            <span className='text-minLilla'>Erik Menkin Lysfjord.</span>
          </h1>
          <h2 className='text-3xl font-sans'>
            I am a Computer Science student.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
