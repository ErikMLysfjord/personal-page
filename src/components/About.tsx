import { useEffect } from 'react';

const Circle = {
  transform: 'translate(0%, -100%)',
  borderRadius: '0 0 100vw 100vw',
};

const About: React.FC = () => {
  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById('circle')!.classList.add('animate-circleIn');
        }
        /* if (entry.isIntersecting) {
          console.log('not intersecting');
          entry.target.classList.add('animate-circleIn');
        }   else {
          console.log('intersecting');
          entry.target.classList.remove('animate-circleIn');
        } */
      });
    }, options);

    observer.observe(document.getElementById('about')!);
  }, []);

  return (
    <div id='about' className='w-full h-full'>
      <div
        id='circle'
        style={Circle}
        className='w-full h-full bg-minLilla mx-auto relative z-0'
      >
        {/* <div
        style={Circle}
        className='w-full h-full bg-minLilla mx-auto animate-circleIn absolute z-0'
      /> */}
      </div>
    </div>
  );
};

export default About;
