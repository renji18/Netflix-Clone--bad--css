import React, { useContext } from 'react';
import { ReactContext } from './App';
import { useRef, useState } from 'react';
import VideoPlayer from './VideoPlayer';

const MainLandingPage = () => {
  const {
    setVideoSelected,
  } = useContext(ReactContext)

  const [play, setPlay] = useState(false)

  const cwRef = useRef(null)
  const pRef = useRef(null)
  const aRef = useRef(null)
  const fRef = useRef(null)
  const mlRef = useRef(null)

  const handleScroll = (scrollOffset, ref) => {
    ref.current.scrollLeft += scrollOffset
  }

  function target(e) {
    return e.target
  }

  const videoModal = () => {
    sessionStorage.setItem('play-video', true)
    setVideoSelected(true)
    setPlay(true)
  }

  return (
    <>
      {play ? <VideoPlayer/> : <div
        className='bg-black text-white'>

        <header
          className='p-5 grid lg:flex'>
          <img
            src={require("../Sample images/download (1).png")}
            alt=''
            className='h-10 cursor-pointer mx-[40%] lg:mx-0'
          />
          <div
            className='w-[100%] text-lg flex justify-between pt-2'>
            <div
              className='flex cursor-pointer space-x-5 pt-3 lg:pt-0 lg:mx-5 lg:px-5'>
              <span>Home</span>
              <span>TV shows</span>
              <span>Movies</span>
              <span>Recently Added</span>
              <span>My List</span>
            </div>
            <div
              className='flex cursor-pointer space-x-5 pt-3 lg:pt-0 lg:mx-5 lg:px-5'>
              <span>Q</span>
              <span>Kids</span>
              <img
                src={require('../Sample images/notif.png')}
                className='h-6 mt-[2px]'
                alt=""
              />
              <span
                className='bg-red-500/75 mr-[-20px] underline h-6 w-6'>
                ``
              </span>
            </div>
          </div>
        </header>

        <div
          className='relative mb-10'>
          <video onClick={videoModal}
            muted
            onMouseOver={e => target(e).play()}
            onMouseOut={e => target(e).pause()}
            className='w-[100%] cursor-pointer'
            src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
          </video>
          <div
            className='absolute bottom-4 left-4 text-black text-6xl'>
            <span>The butterfly</span>
          </div>
        </div>

        {/* Modals */}

        <div
          className='p-3 h-[250px]'>
          <div
            className='text-white text-center text-3xl'>
            Continue Watching
          </div>
          <div
            className='flex space-x-5'>
            <div
              onClick={() => handleScroll(-250, cwRef)}
              className='text-3xl cursor-pointer bg-red-700 h-9 mt-[80px] rounded-3xl px-2'>
              &larr;
            </div>
            <div
              className='flex space-x-5 scrollbar-hide overflow-x-scroll' ref={cwRef}>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleScroll(250, cwRef)}
              className='text-3xl cursor-pointer bg-red-700 h-9 mt-[80px] rounded-3xl px-2'>
              &rarr;
            </div>
          </div>

        </div>

        <div
          className='p-3 h-[250px]'>
          <div
            className='text-white text-center text-3xl'>
            Popular
          </div>
          <div
            className='flex space-x-5'>
            <div
              onClick={() => handleScroll(-250, pRef)}
              className='text-3xl cursor-pointer bg-red-700 h-9 mt-[80px] rounded-3xl px-2'>
              &larr;
            </div>
            <div
              className='flex space-x-5 scrollbar-hide overflow-x-scroll' ref={pRef}>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleScroll(250, pRef)}
              className='text-3xl cursor-pointer bg-red-700 h-9 mt-[80px] rounded-3xl px-2'>
              &rarr;
            </div>
          </div>

        </div>

        <div
          className='p-3 h-[250px]'>
          <div
            className='text-white text-center text-3xl'>
            Action
          </div>
          <div
            className='flex space-x-5'>
            <div
              onClick={() => handleScroll(-250, aRef)}
              className='text-3xl cursor-pointer bg-red-700 h-9 mt-[80px] rounded-3xl px-2'>
              &larr;
            </div>
            <div
              className='flex space-x-5 scrollbar-hide overflow-x-scroll' ref={aRef}>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleScroll(250, aRef)}
              className='text-3xl cursor-pointer bg-red-700 h-9 mt-[80px] rounded-3xl px-2'>
              &rarr;
            </div>
          </div>

        </div>

        <div
          className='p-3 h-[250px]'>
          <div
            className='text-white text-center text-3xl'>
            Fantasy
          </div>
          <div
            className='flex space-x-5'>
            <div
              onClick={() => handleScroll(-250, fRef)}
              className='text-3xl cursor-pointer bg-red-700 h-9 mt-[80px] rounded-3xl px-2'>
              &larr;
            </div>
            <div
              className='flex space-x-5 scrollbar-hide overflow-x-scroll' ref={fRef}>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleScroll(250, fRef)}
              className='text-3xl cursor-pointer bg-red-700 h-9 mt-[80px] rounded-3xl px-2'>
              &rarr;
            </div>
          </div>

        </div>

        <div
          className='p-3 h-[250px]'>
          <div
            className='text-white text-center text-3xl'>
            My List
          </div>
          <div
            className='flex space-x-5'>
            <div
              onClick={() => handleScroll(-250, mlRef)}
              className='text-3xl cursor-pointer bg-red-700 h-9 mt-[80px] rounded-3xl px-2'>
              &larr;
            </div>
            <div
              className='flex space-x-5 scrollbar-hide overflow-x-scroll' ref={mlRef}>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
              <div
                className='relative'>
                <video onClick={videoModal}
                  muted
                  onMouseOver={e => target(e).play()}
                  onMouseOut={e => target(e).pause()}
                  className='cursor-pointer min-h-[200px] max-w-[281px]'
                  src={require('../Sample videos/SampleVideo_1280x720_5mb.mp4')}>
                </video>
                <div
                  className='absolute bottom-4 left-4 text-black text-3xl'>
                  <span>The butterfly</span>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleScroll(250, mlRef)}
              className='text-3xl cursor-pointer bg-red-700 h-9 mt-[80px] rounded-3xl px-2'>
              &rarr;
            </div>
          </div>

        </div>

        <footer
          className='text-xl mx-3 text-center border-t border-t-white py-5'>
          Netflix &copy; <br /> A Project By Aadarsh Jha
        </footer>

      </div>}
      
    </>
  );
}

export default MainLandingPage;