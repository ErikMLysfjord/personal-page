import { getFunFact } from '../pages/api/hello';

const FunFactComponent = () => {
  return (
    <div className='flex align-middle flex-col bg-slate-300'>
      <button
        className='w-1/4 mx-auto bg-white mb-6 rounded-md p-2'
        onClick={() => getFunFact()}
      >
        Get fun fact
      </button>
    </div>
  );
};

export default FunFactComponent;
