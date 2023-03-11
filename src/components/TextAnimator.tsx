const TextAnimator = ({ text, ...props }: { text: string }) => {
  return (
    <div className='h-full w-full flex justify-center items-center bg-slate-300 dark:bg-zinc-900'>
      {/* <h1 className='writer max-w-fit border-r-2 border-r-black dark:border-r-black'> */}
      {/* <div className=' animate-untype pause hover:running mx-auto my-0'> */}
      <h1 className='animate-type dark:animate-typeDark overflow-hidden whitespace-nowrap tracking-wide max-w-fit border-r-2 border-r-black dark:border-r-white text-4xl font-monospace hover:animate-untype'>
        {text}
      </h1>
      {/* </div> */}
    </div>
  );
};

export default TextAnimator;
