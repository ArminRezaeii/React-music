import React, { useEffect } from 'react'
import Login from './components/Login'
import { useStateProvider } from './utils/StateProvider'
import reducer from './utils/reducer'
import { reducerCases } from './utils/Constants'
import Spotify from './components/Spotify'

export default function App() {
  const [{ token }, disptach] = useStateProvider()
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1]
      disptach({ type: reducerCases.SET_TOKEN, token })
    }
  }, [token, disptach])
  return (
    <div>
      {token ? <Spotify /> : <Login />}

    </div>
  )
}
