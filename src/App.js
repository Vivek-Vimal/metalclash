import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Page/Page1/Home'
import Page2 from './Page/Page2/Page2'
import Page3 from './Page/Page3/Page3'
import Page4 from './Page/Page4/Page4'
import Page5 from './Page/Page5/Page5'
import Page6 from './Page/Page6/Page6'
import Page7 from './Page/Page7/Page7'
import Footer from './Page/Foot/Footer'

const App = () => {

  return (
    <>
      <Navbar />
      <Home />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Footer />
   </>
  )
}

export default App
