import Image from 'next/image';
import Link from 'next/link';
import LinkedIn from '../../public/LinkedIn.svg';
import Github from '../../public/github-mark.svg';
import CV from '../../public/cv.svg';

const Hero: React.FC = () => {
  const handleScroll = () => {
    const about = document.getElementById('about');
    about?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full h-full'>
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
        <div className='w-10 h-10 relative hover:cursor-pointer hover:scale-110 ease-in-out duration-200'>
          <Image
            src={CV}
            alt={'Resume'}
            layout={'fill'}
            objectFit={'contain'}
          />
        </div>
      </nav>
      <div className='flex justify-center flex-col w-full h-full'>
        <div style={{ fontSize: '56px' }} className='p-10  animate-fadeIn'>
          <h1 className='font-sans'>
            Hey, my name is{' '}
            <span className='text-minLilla'>Erik Menkin Lysfjord.</span>
          </h1>
          <h2 className='text-3xl font-sans'>
            I am a Computer Science student.
          </h2>
        </div>
        <div className='mb-20 absolute bottom-0 left-1/2 animate-fadeInScroll'>
          <a onClick={() => handleScroll()}>
            {/* Change animation to purple background color, white arrow?¿ */}
            {/* <span className='rounded-full border-minLilla/0 border w-11 h-11 box-border absolute left-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:w-4 after:h-4 after:border-minLilla after:absolute after:box-border after:ml-325 after:mt-2.5 hover:border-white delay-75 hover:bg-minLilla hover:cursor-pointer transition ease-in-out' /> */}
            <span className='rounded-full border-minLilla/0 border w-11 h-11 box-border absolute left-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:w-4 after:h-4 after:border-minLilla after:absolute after:box-border after:ml-325 after:mt-2.5 delay-75 hover:border-minLilla hover:cursor-pointer transition ease-in-out' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
