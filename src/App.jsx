import React from 'react'
import Forms from './Components/Forms'

import About from './Components/About'
import {Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'

function App() {
  return (

    <div className=' relative '>

        <Navbar />
        <Route exact path = '/'  component={Home} />
        <Route path = '/about' component={About}  />
        <Route path = '/service'  component={Forms} />
        <Footer />
    </div>

  )
}

export default App
