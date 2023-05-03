import React, { useState, useEffect } from 'react'
import Opening from './Opening.js'
import LoginPage from './LoginPage.js';
import WhoIsWatching from './WhoIsWatching.js';
import MainLandingPage from './MainLandingPage.js';
import VideoPlayer from './VideoPlayer.js';

export const ReactContext = React.createContext()

function App() {

  const [enter, setEnter] = useState(true)
  const [profile, setProfile] = useState(false)
  const [videoSelected, setVideoSelected] = useState(false)

  useEffect(() => {
    sessionStorage.setItem('netflixSessionActive', 'true')
  }, [])

  setTimeout(() => {
    setEnter(false)
  }, 2000);

  const sessionProfile = sessionStorage.getItem('profile')
  const login = localStorage.getItem('loggedIn')
  const loaded = sessionStorage.getItem('netflixSessionActive')
  const videoPlayed = sessionStorage.getItem('play-video')

  const ContextValues = {
    setProfile,
    profile,
    sessionProfile,
    setVideoSelected,
    videoSelected,
  }

  return (
    <ReactContext.Provider value={ContextValues}>
      {enter && !loaded ? <Opening />: !login ? <LoginPage /> : !profile && !sessionProfile ? <WhoIsWatching/> : !videoPlayed && !videoSelected ? <MainLandingPage/> : <VideoPlayer/>}
    </ReactContext.Provider>
  )
}

export default App;