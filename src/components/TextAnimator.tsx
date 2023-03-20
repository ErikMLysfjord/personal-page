type Props = {
  header: string;
  text: string;
};

const TextAnimator: React.FC<Props> = ({ header, text }) => {
  return (
    <div className='h-full w-full flex justify-center items-center bg-slate-300 dark:bg-zinc-900 flex-col'>
      <h1 className='animate-type dark:animate-typeDark overflow-hidden whitespace-nowrap tracking-wide max-w-fit border-r-2 border-r-transparent dark:border-r-transparent text-4xl font-monospace'>
        {header}
      </h1>
      <p className='delay dark:delay animate-typeSlow dark:animate-typeSlowDark overflow-hidden whitespace-nowrap tracking-wide max-w-fit border-r-2 border-r-black dark:border-r-white text-md font-monospace'>
        {text}
      </p>
    </div>
  );
};

export default TextAnimator;
