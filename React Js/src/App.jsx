import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import First, { Detail, Detail1, First1, First2 } from './Class 1/First'

function App() {
  let name="Suresh";
  let city="Dubai";

  let info={
    name:"Sumit",
    age:37,
    city :"Noida"
  }

  return (
    <>
      {/* <h1>Hello</h1> */}
      <First/>
      <First1/>
      <First2/>

      <Detail name={name} city={city}/>

      <Detail1 info={info}/>
    </>
  )
}

export default App
