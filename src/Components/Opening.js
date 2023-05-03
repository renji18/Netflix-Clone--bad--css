import React, { useContext } from 'react';
import { ReactContext } from './App';

const Opening = () => {
  const {} = useContext(ReactContext)

  return (
    <div
      className='bg-black h-[100vh] w-[100vw]'>
      <div
        className='grid justify-center items-center'>
        <img
          className='h-[60vh] animate-bounce mt-[120px] w-[60vw]'
          src={require("../Sample images/download (1).png")} alt=''/>
      </div>
      <div
        className='flex justify-center'>
      </div>
    </div>
  );
}

export default Opening;
