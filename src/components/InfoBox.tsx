import Image from 'next/image';
import { useNavigate } from 'react-router-dom';
import Icon from '../../public/icon.png';
import LinkedIn from '../../public/LinkedIn.svg';
import Mail from '../../public/Mail.svg';

const InfoBox: React.FC = () => {
  return (
    <div
      style={{ backgroundColor: '#FCDA9A' }}
      className='flex align-middle items-center flex-col w-full h-full'
    >
      <div
        style={{ backgroundColor: '#F0F0F0' }}
        className='bg-white w-2/3 h-2/3 z-10 m-auto rounded-3xl flex flex-row align-middle items-center justify-around gap-10 shadow-md font-sans dark:text-black textfont-black py-6'
      >
        <div className='relative h-full w-full ml-10'>
          <Image
            src={Icon}
            alt={'Picture of me'}
            layout={'fill'}
            objectFit={'contain'}
          />
        </div>
        <div className='h-full w-full overflow-auto'>
          <h1 className='text-4xl font-bold mt-6'>
            Hey, my name is <br />
            Erik Menkin Lysfjord
          </h1>
          <h2 className='font-bold text-lg'>Bachelor in Computer Science</h2>
          <br />
          <p>
            I am a 21 year old developer that enjoys learning and exploring.
          </p>
          <br />
          <p>
            I am based in Trondheim, Norway, where I study my second year of
            Computer Science at NTNU in Trondheim.
          </p>
          <br />
          <p>Scroll to read more of me and look at some of my projects!</p>
          <br />
          <br />
          <div className='w-1/3 h-auto flex flex-row justify-evenly'>
            <div className='w-2/5 h-auto relative'>
              <Image
                src={LinkedIn}
                alt={'LinkedIn'}
                className='hover:cursor-pointer'
                onClick={() =>
                  window.location.assign(
                    'https://www.linkedin.com/in/erik-menkin-lysfjord/',
                  )
                }
              />
            </div>
            <div className='w-2/5 h-auto relative'>
              <Image
                src={Mail}
                alt={'Mail'}
                className='hover:cursor-pointer'
                onClick={() =>
                  (window.location.href = 'mailto:erik.menkin@lysfjord.no')
                }
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
