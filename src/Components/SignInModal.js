import React, { useContext, useState } from 'react';
import WhoIsWatching from './WhoIsWatching';
import { ReactContext } from './App';

const SignInModal = () => {
  const {} = useContext(ReactContext)

  const [signedIn, setSignedIn] = useState(false)

  function handleSignInClick() {
    setSignedIn(true)
    localStorage.setItem('loggedIn', 'true')
  }

  return (
    <>
      {signedIn ? <WhoIsWatching /> : <div
        className='z-10 grid h-[100vh] bg-black/60 w-[100vw]'>
        <img
          className='w-[100vw] h-[100vh]'
          src={require("../Sample images/SampleJPGImage_200kbmb.jpg")} alt='' />
        <div
          className='absolute top-0 w-[100vw] h-[100vh]'>
          <div
            className='flex justify-center items-center h-[100vh]'>
            <div
              className='bg-black/75 h-[650px] w-[450px] p-16 text-white'>
              <p
                className='text-4xl'>
                Sign In
              </p>
              <input
                type="text"
                autoComplete='off'
                className='outline-none w-[100%] mt-14 text-black rounded-md mb-7 p-1 text-2xl'
                name="email"
                id="email" />
              <br />
              <input
                type="password"
                autoComplete='off'
                className='outline-none w-[100%] text-black rounded-md mb-10 text-2xl p-1'
                name="pw"
                id="pw" />
              <button
                onClick={handleSignInClick}
                className='w-[100%] bg-red-500 rounded-md py-1 text-2xl'>
                Sign In
              </button>
              <div
                className='flex justify-between my-2'>
                <label htmlFor="rememberMe">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    name="rememberMe"
                    id="rememberMe" />
                  Remember Me
                </label>
                need help?
              </div>
              <p
                className='mt-10'>
                New to Netflix?
                <span
                  className='text-xl font-bold text-blue-500 hover:cursor-pointer'>
                  Sign up now.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>}

    </>
  );
}

export default SignInModal;
