import { Router, Routes } from 'react-router-dom'
import './App.css'
import { Add } from './components/Add'
import { Admin } from './components/Admin'
import { Gusets_says } from './components/Gusets_says'
import { Navbar } from './components/Navbar'
import { Section_2 } from './components/Section_2'
import { Section_about } from './components/Section_about'
import { Section_img } from './components/Section_img'
import { Data } from './components/data'
import Edit from './components/Edit'

function App() {
  return (
    <>
       <Navbar></Navbar>
       <Section_2></Section_2>
       <Data></Data>
       <Section_img />
       <Section_about />
       <Gusets_says />
       <Admin />
    </>
  )
}

export default App
