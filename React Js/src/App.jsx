import { createContext, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import First, { Detail, Detail1, First1, First2 } from './Class 1/First'
import Second from './Class 2/Second'
import Second1 from './Class 2/Second1'
import Second2 from './Class 2/Second2'
import Second3 from './Class 2/Second3'
import Third from './Class 3/Third'
import Third1 from './Class 3/THird1'
import Fourth from './Class 4/Fourth'
import Fifth from './Class 5/Fifth'
import Sixth from './Class 6/Sixth'
import Sixth1 from './Class 6/Sixth1'
import Stopwatch from './Class 6/Stopwatch'
import Seventh from './Class 7/Seventh'
import ThemeProvider from './Class 7/ThemeUpdater/ThemeContext'
import Home from './Class 7/ThemeUpdater/Home'
import LazyLoading from './Class 7/LazyLoading'

export let UserContext= createContext() // step 1.

function App() {
  let name="Suresh";
  let city="Dubai";

  let info={
    name:"Sumit",
    age:37,
    city :"Noida"
  }


  let [user,setUser]=useState("Ayush");

  
  return (
    <>
      {/* <h1>Hello</h1> */}
      {/* <First/>
      <First1/>
      <First2/>

      <Detail name={name} city={city}/>

      <Detail1 info={info}/> */}

      {/* <Second/> */}
      {/* <Second1/> */}
      {/* <Second2/> */}
      {/* <Second3/> */}

      {/* <Third/> */}
      {/* <Third1/> */}

      {/* <Fourth/> */}

      {/* <Fifth/> */}

      {/* <Sixth/> */}
      {/* <Sixth1/> */}
      {/* <Stopwatch/> */}

      {/* Step 2 : Provide the context */}
      {/* <UserContext.Provider value={{user,setUser}}>
          <Seventh/>
      </UserContext.Provider> */}

      {/* <ThemeProvider>
        <Home/>
      </ThemeProvider> */}
      {/* <Home/> */}

      {/* <Dashboard/> */}
      <LazyLoading/>
    </>
  )
}

export default App
