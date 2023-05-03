import React, { useContext, useState } from 'react';
import { ReactContext } from './App';
import WarningLine from './WarningLine.js';
import SignInModal from './SignInModal.js';

const LoginPage = () => {
  const {} = useContext(ReactContext)

  const [main, setMain] = useState(false)
  const [warning, setWarning] = useState(false)
  const [signin, setSignin] = useState(false)

  function handleLoginButton() {
    if (main === false) {
      setWarning(true)
    }else{
      setSignin(true)
    }
  }

  function handleInput(){
    setMain(true)
  }

  function handleSignInButton() {
    setSignin(true)
  }

  return (
    <>
      {signin ? <SignInModal /> :
        <div
          className='bg-black overflow-x-hidden text-white h-[100vh] w-[100vw]'>
          <div>
            <img
              className='w-[100vw] h-[85vh]'
              src={require("../Sample images/SampleJPGImage_200kbmb.jpg")} alt=''/>
            <header
              className='absolute px-8 w-[100vw] mt-7 top-0'>
              <img
                className='w-[150px]'
                src={require("../Sample images/download (1).png")} alt=''/>
              <button
                onClick={handleSignInButton}
                className='bg-red-500 float-right rounded-md text-black mt-[-40px] px-3 py-2 ml-7'>
                Sign In
              </button>
              <select
                name="lang"
                className='text-black float-right outline-none border-none mt-[-40px] px-3 py-2 rounded-md'
                id="lang">
                <option value="English">English</option>
                <option value="Japanese">Japanese</option>
              </select>

            </header>
            <div
              className='absolute text-rose-700 top-[220px] grid justify-center w-[100vw] space-y-3'>
              <p
                className='text-5xl text-center font-bold w-[500px] mb-3'>
                Unlimited movies, TV shows and more.</p>
              <p
                className='text-3xl w-[500px] text-center'>
                Watch anywhere. Cancel anytime.</p>
              <p
                className='text-2xl w-[500px] text-center'>
                Ready to watch? Enter your email to  create <br /> or restart your membership</p>
              <input
                type="email"
                autoComplete='off'
                onChange={handleInput}
                placeholder='Email address'
                className='w-[500px] text-black rounded-md text-xl py-3 px-2 outline-none'
                name="email"
                id="email" />
              {warning ? <WarningLine /> : ''}
              <div className='flex justify-center'>
                <button
                  onClick={handleLoginButton}
                  className='bg-red-600 text-white w-[120px] py-2 px-2'>
                  Get Started &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default LoginPage;
