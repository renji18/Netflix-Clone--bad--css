import React, { useContext } from 'react';
import { ReactContext } from './App';
import MainLandingPage from './MainLandingPage';

const VideoPlayer = () => {
  const {
    videoSelected,
    setVideoSelected,
  } = useContext(ReactContext)

  function handleLogoClick(){
    console.log(videoSelected);
    setVideoSelected(false)
  }

  return (
    <>
      {!videoSelected ? <MainLandingPage/> : <div
        className='bg-black h-[100vh] w-[100vw]'>

        <header
          onClick={handleLogoClick}
          className='p-5 grid lg:justify-center w-[100vw]'>
          <img
            src={require("../Sample images/download (1).png")}
            alt=''
            className='h-10 cursor-pointer mx-[40%] lg:mx-0'
          />
        </header>


        <div
          className='flex justify-center mt-4 mx-3'>
          <div
            className=''>
            <video 
              muted
              controls
              autoPlay
              className='border-8 outline-none'
              src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}></video>
          </div>
        </div>

        
      </div>}
      
    </>
  );
}

export default VideoPlayer;
