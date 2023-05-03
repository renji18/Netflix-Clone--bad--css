import React, { useContext } from 'react';
import { ReactContext } from './App';


const WhoIsWatching = () => {
  const {
    setProfile,
  } = useContext(ReactContext)

  function handleProfileClicks(){
    setProfile(true)
    sessionStorage.setItem('profile', 'set')
  }

  return (
    <div
      className='grid justify-center pt-20 w-[100vw] text-white h-[100vh] bg-black/80'>
      <div>
        <p
          className='text-5xl text-center'>
          Who's watching?
        </p>
        <div
          className='grid gap-5 mt-10 grid-cols-3'>
          <div>
            <button 
              onClick={handleProfileClicks}
              className='h-[150px] w-[150px] bg-red-600'>
            </button>
            <div
              className='text-2xl text-center'>
              Me
            </div>
          </div>
          <div>
            <button 
              onClick={handleProfileClicks}
              className='h-[150px] w-[150px] bg-cyan-600'>
            </button>
            <div
              className='text-2xl text-center'>You</div>
          </div>
          <div>
            <button 
              onClick={handleProfileClicks}
              className='h-[150px] w-[150px] bg-emerald-600'>
            </button>
            <div
              className='text-2xl text-center'>Us</div>
          </div>
          <div>
            <button className='h-[150px] w-[150px] bg-white text-black rounded-[50%] text-9xl text-center pt-2'>+</button>
            <div
              className='text-2xl text-center'>Add profile</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoIsWatching;
