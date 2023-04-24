import React from 'react'
import Home from './home'
import { Route, Routes} from "react-router-dom";
import Error from './pages/e404';
import Dictionary from './pages/Dictionary';
import About from './pages/About';
import Contact from './pages/Contact';

const App  = () => {
  return (
    <>
    <Routes>
      <Route path="/"  Component={Home}></Route>
      <Route path="/Error"  Component={Error}></Route>
      <Route path="/Dictionary"  Component={Dictionary}></Route>
      <Route path="/About"  Component={About}></Route>
      <Route path="/Contact"  Component={Contact}></Route>
  </Routes>
    </>
  )
}

export default App
