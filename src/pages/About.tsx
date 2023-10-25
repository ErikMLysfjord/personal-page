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
          document.querySelectorAll('.aboutText').forEach((element) => {
            element.classList.add('animate-fadeIn');
          });
        }
      });
    }, options);

    observer.observe(document.getElementById('about')!);
  }, []);

  return (
    <div id='about' className='w-full h-full snap-center'>
      <div
        id='circle'
        style={Circle}
        className='w-full h-full bg-minLilla mx-auto relative z-0 flex flex-row flex-wrap justify-center p-10  text-center text-white'
      >
        <div className='basis-full h-6'>
          <h2 className='font-bold text-3xl aboutText'>About me</h2>
        </div>

        <div className='w-1/4'>
          <p className='aboutText'>Hello</p>
        </div>
        <div className='w-1/4 h-1/2'>
          <p className='aboutText'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan
            lacus vel facilisis volutpat est velit. Aenean pharetra magna ac
            placerat vestibulum lectus mauris ultrices. Amet risus nullam eget
            felis eget nunc lobortis mattis. Enim diam vulputate ut pharetra sit
            amet aliquam. Sed cras ornare arcu dui vivamus. Odio ut enim blandit
            volutpat maecenas volutpat blandit aliquam. Risus nec feugiat in
            fermentum posuere urna nec. Morbi tristique senectus et netus et
            malesuada fames ac turpis. In eu mi bibendum neque egestas congue
            quisque egestas diam. Eget sit amet tellus cras adipiscing. Ut
            tristique et egestas quis ipsum. Arcu non odio euismod lacinia.
            Vitae tempus quam pellentesque nec nam. Luctus accumsan tortor
            posuere ac ut consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
