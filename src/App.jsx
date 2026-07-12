import React, {useState} from 'react'

import UserContextProvider from './context/UserContextProvider' 
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
   <h1>Mini Context Project</h1>
    <Login />
    <Profile />
   </UserContextProvider>
  )
}

export default App
