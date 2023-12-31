import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Homepage from './Homepage/Homepage'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Contact from './Contact/Contact'
import LocationDetails from './LocationDetails/LocationDetails'
import CitySearch from './CitySearch/CitySearch'
import SpecificApartment from './SpecificApartment/SpecificApartment'

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element= {<Homepage />}/>
      <Route path='/City/:itemId' element= {<LocationDetails />}/>
      <Route path='/Search' element= {<CitySearch />}/>
      <Route path='/Apartment/:aptId' element= {<SpecificApartment />}/>
      </Routes>
    <Contact/>
    <Footer/>

    </BrowserRouter>
  )
}

export default App
