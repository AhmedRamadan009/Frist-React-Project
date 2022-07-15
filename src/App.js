
import './App.css';


import React, { Component } from 'react'
import Navbar from './Components/App/Navbar/Navbar';
import Home from './Components/App/Home/Home';
import Protofilo from './Components/App/Portofilo/Protofilo';
import About from './Components/App/About/About';
import Contact from './Components/App/Contact/Contact';
import Footer from './Components/App/Footer/Footer';
import {Routes,Route} from 'react-router-dom';
import Movie from './Components/App/Movies/Movie';


export default class App extends Component {
  render() {
    return (
     <>
     <Navbar/>

<Routes>
  
<Route path='/' element={<Home/>}/>

<Route path='home' element={<Home/>}/>
<Route path='portofilo' element={<Protofilo/>}/>
<Route path='about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='movie' element={<Movie/>}/>




</Routes>
    

     <Footer/>
     
     </>
    )
  }
}
