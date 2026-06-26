import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Home = () => {
    const{theme,toggleTheme}=useContext(ThemeContext)
  return (
    <div style={
        {
            background:
            theme==="light"?
            "white":
            "black",
            
            color:
            theme==="light"?
            "black":
            "white"
        }
    }>
        <h1>{theme} Theme</h1>
      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default Home
